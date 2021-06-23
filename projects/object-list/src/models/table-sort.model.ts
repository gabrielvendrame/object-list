export class TableSortModel {
    static readonly DIRECTION_ASCENDING  = false;
    static readonly DIRECTION_DESCENDING = true;

    private readonly fieldId: string;
    private readonly direction: boolean;

    constructor(field: string, direction: boolean = TableSortModel.DIRECTION_ASCENDING) {
        this.fieldId = field;
        this.direction = direction;
    }

    getFieldId() {
        return this.fieldId;
    }

    getDirection() {
        return this.direction;
    }
}
