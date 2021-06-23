export abstract class TableFilterModel {
  private readonly _id: string;
  private readonly _name: string;
  protected abstract readonly type: string;
  private readonly _fieldGetterMethodName: string[];
  private _value: any;

  constructor(id: string, name: string, fieldGetterMethodName?: string[], value?: any) {
    this._id = id;
    this._name = name;

    if (value) {
      this.value = value;
    }

    if (fieldGetterMethodName) {
      this._fieldGetterMethodName = fieldGetterMethodName;
    }
  }

  get id(): string {
    return this._id;
  }

  getType(): string{
    return this.type
  }

  get name(): string {
    return this._name;
  }

  get fieldGetterMethodName(): string[] {
    return this._fieldGetterMethodName;
  }

  get value(): any {
    return this._value;
  }

  set value(value: any) {
    this._value = value;
  }
}
