import { Component, Input, OnChanges, OnInit, Output } from '@angular/core';
import { TableFieldModel } from '../models/table-field.model';
import { TableSortModel } from '../models/table-sort.model';
import { TableFilterModel } from '../models/table-filter.model';

@Component({
  selector: 'object-list',
  templateUrl: './object-list.component.html',
  styleUrls: ['./object-list.component.scss']
})
export class ObjectListComponent implements OnInit, OnChanges {
  @Input() fields: TableFieldModel[];
  @Input() subfields: TableFieldModel[];
  @Input() data: any[];
  @Input() subData: any[];
  @Input() isSelectable = false;
  @Input() sorting: TableSortModel;
  @Input() subSorting: TableSortModel;
  @Input() filters: TableFilterModel[] = [];
  @Input() tableRowClassesFunction: (row: object) => string;

  @Output() changeRowSelected = new EventEmitter();
  @Output() eventOnField = new EventEmitter();

}
