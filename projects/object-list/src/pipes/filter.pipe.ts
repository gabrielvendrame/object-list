import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { TextFilterHandlerService } from './filters/text-filter-handler.service';
import { TableFilterModel } from '../models/table-filter.model';

@Pipe({
  name: 'filter',
  pure: false
})
@Injectable()
export class FilterPipe implements PipeTransform {
  constructor(
    private handlerService: TextFilterHandlerService
  ) {
  }

  private applyFilter(array: any[], filter: TableFilterModel) {
    if (!filter.value) {
      return array;
    }

    const filterValue = filter.value;
    const fieldGetterMethodNames = filter.getFieldGetterMethodName();

    return this.handlerService.handle(array, filter, filterValue, fieldGetterMethodNames);
  }

  transform(array: any[], filters: TableFilterModel[]): any {
    if (!array) {
      return array;
    }

    filters.forEach(filter => {
      array = this.applyFilter(array, filter);
    });

    return array;
  }
}
