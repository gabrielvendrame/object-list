import { Injectable } from '@angular/core';
import { DateFilterHandlerService } from './date-filter-handler.service';
import { TableFilterModel } from '../../models/table-filter.model';
import { ChainOfResponsibilityHandlerModel } from '../../models/chain-of-responsibility-handler.model';

@Injectable({
    providedIn: 'root'
})
export class OptionsFilterHandlerService extends ChainOfResponsibilityHandlerModel {
    constructor(successor: DateFilterHandlerService) {
        super(successor);
    }

    private filterByString(filterValue, fieldGetterMethodNames) {
        return value => {
            if (fieldGetterMethodNames === undefined) {
                return value === filterValue;
            }

            return fieldGetterMethodNames.some(fieldGetterMethodName => {
                return value[fieldGetterMethodName]() === filterValue;
            });
        };
    }

    handle(array: any[], filter: TableFilterModel, filterValue, fieldGetterMethodNames): any[] {
        if (filter.getType() !== 'OptionsFilter') {
            return this.successor.handle(array, filter, filterValue, fieldGetterMethodNames);
        }

        filterValue = filterValue.toLowerCase();
        return array.filter(this.filterByString(filterValue, fieldGetterMethodNames));
    }
}
