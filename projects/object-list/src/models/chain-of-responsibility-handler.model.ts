import { TableFilterModel } from './table-filter.model';

export abstract class ChainOfResponsibilityHandlerModel {
    protected successor: ChainOfResponsibilityHandlerModel | null;

    constructor(successor: ChainOfResponsibilityHandlerModel = null) {
        this.successor = successor;
    }

    abstract handle(array: any[], filter: TableFilterModel, filterValue, fieldGetterMethodNames): any[];
}
