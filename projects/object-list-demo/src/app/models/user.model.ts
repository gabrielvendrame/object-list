export class UserModel {
  private _id: number;
  private _name: string;
  private _sex: string;


  constructor(id: number, name: string, sex: string) {
    this._id = id;
    this._name = name;
    this._sex = sex;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get sex(): string {
    return this._sex;
  }

  set sex(value: string) {
    this._sex = value;
  }
}
