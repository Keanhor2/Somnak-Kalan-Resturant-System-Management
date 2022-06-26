import { Gender, Person } from "../Person";
import { Staff, Role } from "./Staff";

export class Accountant extends Staff {
  constructor(name: string, age: number,category: Role, gender: Gender,protected salary: number) {
    super(name, age,category, gender,salary);
  }
}
