import { Gender, Person } from "../Person";
import { Staff, Role } from "./Staff";

/**
 * A nurse manage patient checks
 */
export class Cheif extends Staff {
  constructor(name: string, age: number,category: Role, gender: Gender,protected salary: number) {
    super(name, age,category, gender,salary);
  }
}
