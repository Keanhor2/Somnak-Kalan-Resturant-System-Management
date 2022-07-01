import { Gender, Person } from "../Person";
import { Staff, Role, Salary } from "./Staff";

export class Accountant extends Staff {
  constructor(name: string, age: number,category: Role, gender: Gender) {
    super(name,age,category,gender,Salary.ACCOUNTANT_SALARY);
  }
}
