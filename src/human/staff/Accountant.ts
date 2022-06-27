import { Gender, Person } from "../Person";
import { Staff, Role, Salary } from "./Staff";

export class Accountant extends Staff {
  constructor(name: string, age: number,category: Role, gender: Gender, salary:Salary) {
    super(name,age,category,gender,salary);
  }
  // customers pay for a food
  getCustomerPayment(){

  }
}
