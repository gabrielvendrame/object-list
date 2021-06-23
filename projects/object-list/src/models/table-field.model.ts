export class TableFieldModel {
  private readonly _fieldId: string;
  private readonly _valueGetterName: string;
  private readonly _eventName: string;
  private readonly _sideIconName: string;
  private readonly _classesFunctionName: string;

  constructor(fieldId: string, valueGetterName?: string, eventName?: string, sideIconName?: string, classesFunctionName?: string) {
    this._fieldId = fieldId;
    this._valueGetterName = valueGetterName;
    this._eventName = eventName;
    this._sideIconName = sideIconName;
    this._classesFunctionName = classesFunctionName;
  }

  get fieldId(): string {
    return this._fieldId;
  }

  get valueGetterName(): string {
    return this._valueGetterName;
  }

  get eventName(): string {
    return this._eventName;
  }

  get sideIconName(): string {
    return this._sideIconName;
  }

  get classesFunctionName(): string {
    return this._classesFunctionName;
  }
}
