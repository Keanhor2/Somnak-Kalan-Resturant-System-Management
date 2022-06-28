import { Gender, Person } from "../Person";
import { Staff, Role, Salary } from "./Staff";

/**
 * A nurse manage patient checks
 */
export class Chef extends Staff {
  constructor(name: string, age: number,category: Role, gender: Gender) {
    super(name, age,category, gender,Salary.CHEIF_SALARY);
  }
}
