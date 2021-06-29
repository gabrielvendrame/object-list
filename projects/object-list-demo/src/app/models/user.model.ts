export class UserModel {
  private id: number;
  private name: string;
  private sex: string;


  constructor(id: number, name: string, sex: string) {
    this.id = id;
    this.name = name;
    this.sex = sex;
  }

  getId(): number {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getSex(): string {
    return this.sex;
  }
}
