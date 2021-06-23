export class TableHeaderModel {
  private readonly _fieldHeaderName: string;
  private readonly _isOrderable: string;
  private readonly _colspan: number;
  private readonly _filterGetterNames: string[];

  constructor(fieldHeaderName: string, isOrderable: string, colspan = 1, filterGetterNames: string[]) {
    this._fieldHeaderName = fieldHeaderName;
    this._isOrderable = isOrderable;
    this._colspan = colspan;
    this._filterGetterNames = filterGetterNames;
  }

  get fieldHeaderName(): string {
    return this._fieldHeaderName;
  }

  get isOrderable(): string {
    return this._isOrderable;
  }

  get colspan(): number {
    return this._colspan;
  }

  get filterGetterNames(): string[] {
    return this._filterGetterNames;
  }
}
