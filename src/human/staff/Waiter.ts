import { Gender, Person } from "../Person";
import { Staff, Role, Salary } from "./Staff";

/**
 * A nurse manage patient checks
 */
export class Waiter extends Staff {
  constructor(name: string, age: number,category: Role, gender: Gender) {
    super(name, age,category, gender,Salary.WAITER_SALARY);
  }
}