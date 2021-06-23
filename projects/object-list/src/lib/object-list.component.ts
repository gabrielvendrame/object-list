import { Component, Input, OnChanges, OnInit, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { TableFieldModel } from '../models/table-field.model';
import { TableSortModel } from '../models/table-sort.model';
import { TableFilterModel } from '../models/table-filter.model';
import { TableHeaderModel } from '../models/table-header.model';

@Component({
  selector: 'object-list',
  templateUrl: './object-list.component.html',
  styleUrls: ['./object-list.component.scss']
})
export class ObjectListComponent implements OnInit, OnChanges {
  @Input() fields: TableFieldModel[];
  @Input() subfields: TableFieldModel[];
  @Input() header: TableHeaderModel[];
  @Input() data: any[];
  @Input() subData: any[];
  @Input() isSelectable = false;
  @Input() sorting: TableSortModel;
  @Input() subSorting: TableSortModel;
  @Input() filters: TableFilterModel[] = [];
  @Input() tableRowClassesFunction: (row: object) => string;

  @Output() changeRowSelected = new EventEmitter();
  @Output() eventOnField = new EventEmitter();

  ngOnInit() {
    this.orderData();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.orderData();
  }

  orderData() {
    const sign = this.sorting.getDirection() ? -1 : 1;
    const fieldId = this.sorting.getFieldId();
    this.data.sort((a, b) => {
      if (a[fieldId] === b[fieldId]) {
        return 0;
      }
      return a[fieldId] > b[fieldId] ? sign : -sign;
    });
  }

  changeOrderField(field: TableFieldModel): void {

    // TODO fix this
    // if (!field.getIsOrderable()) {
    //   return;
    // }

    this.sorting = new TableSortModel(field.fieldId, !this.sorting.getDirection());
    this.orderData();
  }

  isSortField(field: TableFieldModel): boolean {
    return this.sorting.getFieldId() === field.fieldId;
  }

  isSortAscending(): boolean {
    return this.sorting.getDirection() === TableSortModel.DIRECTION_ASCENDING;
  }

  toggleShowDetail(row) {
    this.eventOnField.emit({
      event: 'rowClick',
      data: row,
    });
  }

  toggleSelectRow(event: Event, row) {
    event.stopPropagation();

    row.objectListIsSelected = !row.objectListIsSelected;
    this.changeRowSelected.emit(row);
  }

  clickEvent(event: Event, row, actionName?: string) {
    if (!actionName) {
      return;
    }

    event.stopPropagation();

    this.eventOnField.emit({
      event: actionName,
      data: row,
    });
  }

  getRowFieldValue(row, field) {
    const value = row[field.valueGetterName];

    // tslint:disable-next-line:triple-equals
    return value == undefined ? 'N/A' : value;
  }

  getRowFieldClass(row, field): string {
    const classFunctionName = field.classesFunctionName;
    if (classFunctionName === undefined) {
      return '';
    }

    return row[classFunctionName]();
  }


}
