import { Injectable } from '@angular/core';
import { DefaultFilterHandlerService } from './default-filter-handler.service';
import * as moment from 'moment';
import { Moment } from 'moment';
import { ChainOfResponsibilityHandlerModel } from '../../models/chain-of-responsibility-handler.model';
import { TableFilterModel } from '../../models/table-filter.model';

@Injectable({
    providedIn: 'root'
})
export class DateFilterHandlerService extends ChainOfResponsibilityHandlerModel {
    constructor(successor: DefaultFilterHandlerService) {
        super(successor);
    }

    private filter(filterValue: Moment, fieldGetterMethodNames) {
        return value => {
            if (fieldGetterMethodNames === undefined) {
                return value === filterValue;
            }

            return fieldGetterMethodNames.some(fieldGetterMethodName => {
                return moment(value[fieldGetterMethodName]()).isSame(filterValue, 'day');
            });
        };
    }

    handle(array: any[], filter: TableFilterModel, filterValue, fieldGetterMethodNames): any[] {
        if (filter.getType() !== 'DateFilter') {
            return this.successor.handle(array, filter, filterValue, fieldGetterMethodNames);
        }

        filterValue = moment(filterValue);
        return array.filter(this.filter(filterValue, fieldGetterMethodNames));
    }
}
