import { Injectable } from '@angular/core';
import { OptionsFilterHandlerService } from './options-filter-handler.service';
import { TableFilterModel } from '../../models/table-filter.model';
import { ChainOfResponsibilityHandlerModel } from '../../models/chain-of-responsibility-handler.model';

@Injectable({
    providedIn: 'root'
})
export class TextFilterHandlerService extends ChainOfResponsibilityHandlerModel {
    constructor(successor: OptionsFilterHandlerService) {
        super(successor);
    }

    private static isNumber(value: any): boolean {
        return !isNaN(parseInt(value, 10)) && isFinite(value);
    }

    private filterByString(filterValue, fieldGetterMethodNames) {
        return value => {
            if (fieldGetterMethodNames === undefined) {
                return ('' + value).toLowerCase().indexOf(filterValue) !== -1;
            }

            return fieldGetterMethodNames.some(fieldGetterMethodName => {
                return ('' + value[fieldGetterMethodName]()).toLowerCase().indexOf(filterValue) !== -1;
            });
        };
    }

    handle(array: any[], filter: TableFilterModel, filterValue, fieldGetterMethodNames): any[] {
        if (filter.getType() !== 'TextFilter') {
            return this.successor.handle(array, filter, filterValue, fieldGetterMethodNames);
        }

        // if (TextFilterHandlerService.isNumber(filter.value)) {
        //     return this.defaultFilterHandlerService.handle(array, filter);
        // }
        filterValue = filterValue.toLowerCase();
        return array.filter(this.filterByString(filterValue, fieldGetterMethodNames));
    }
}
