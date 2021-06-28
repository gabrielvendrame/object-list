export class TableFieldModel {
  private readonly fieldId: string;
  private readonly fieldName: string;
  private readonly valueFunctionName: string;
  private readonly actionName: string;
  private readonly sideIconName: string;
  private readonly classesFunctionName: string;
  private readonly isOrderable: boolean;

  constructor(
    fieldId: string,
    fieldName?: string,
    valueFunctionName?: string,
    actionName?: string,
    sideIconName?: string,
    classesFunctionName?: string,
    isOrderable = true
  ) {
    this.fieldId = fieldId;
    this.fieldName = fieldName;
    this.valueFunctionName = valueFunctionName;
    this.actionName = actionName;
    this.sideIconName = sideIconName;
    this.classesFunctionName = classesFunctionName;
    this.isOrderable = isOrderable;
  }

  getFieldId() {
    return this.fieldId;
  }

  getFieldName() {
    return this.fieldName;
  }

  getValueFunctionName() {
    return this.valueFunctionName;
  }

  getActionName() {
    return this.actionName;
  }

  getSideIconName() {
    return this.sideIconName;
  }

  getClassesFunctionName() {
    return this.classesFunctionName;
  }

  getIsOrderable() {
    return this.isOrderable;
  }
}
