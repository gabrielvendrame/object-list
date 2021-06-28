export class UserModel {
  private _id: number;
  private _name: string;
  private _sex: string;


  constructor(id: number, name: string, sex: string) {
    this._id = id;
    this._name = name;
    this._sex = sex;
  }

  getId(): number {
    return this._id;
  }

  getName(): string {
    return this._name;
  }

  getSex(): string {
    return this._sex;
  }
}
