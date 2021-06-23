export class TableHeaderModel {
  private readonly _fieldHeaderName: string;
  private readonly _filterGetterNames: string[];
  private readonly _isOrderable: boolean;
  private readonly _colspan: number;


  constructor(fieldHeaderName: string, filterGetterNames?: string[], isOrderable= true, colspan = 1) {
    this._fieldHeaderName = fieldHeaderName;
    this._filterGetterNames = filterGetterNames;
    this._isOrderable = isOrderable;
    this._colspan = colspan;
  }

  get fieldHeaderName(): string {
    return this._fieldHeaderName;
  }

  get filterGetterNames(): string[] {
    return this._filterGetterNames;
  }

  get isOrderable(): boolean {
    return this._isOrderable;
  }

  get colspan(): number {
    return this._colspan;
  }
}
