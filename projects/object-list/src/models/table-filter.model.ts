export abstract class TableFilterModel {
  private readonly id: string;
  private readonly name: string;
  protected abstract readonly type: string;
  private readonly fieldGetterMethodName: string[];
  private _value: any;

  constructor(id: string, name: string, fieldGetterMethodName?: string[], value?: any) {
    this.id = id;
    this.name = name;

    if (value) {
      this.value = value;
    }

    if (fieldGetterMethodName) {
      this.fieldGetterMethodName = fieldGetterMethodName;
    }
  }

  getId(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getType(): string {
    return this.type;
  }

  getFieldGetterMethodName(): string[] {
    return this.fieldGetterMethodName;
  }

  get value(): any {
    return this._value;
  }

  set value(value: any) {
    this._value = value;
  }
}
