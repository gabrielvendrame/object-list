import { Injectable } from '@angular/core';
import { TableFilterModel } from '../../models/table-filter.model';
import { ChainOfResponsibilityHandlerModel } from '../../models/chain-of-responsibility-handler.model';

@Injectable({
    providedIn: 'root'
})
export class DefaultFilterHandlerService extends ChainOfResponsibilityHandlerModel {
    handle(array: any[], filter: TableFilterModel, filterValue, fieldGetterMethodNames): any[] {
        return array.filter(value => {
            return filterValue === undefined || filterValue === value;
        });
    }
}
