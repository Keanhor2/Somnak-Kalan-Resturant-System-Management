import { Gender, Person } from "../Person";
import { Staff, Role } from "./Staff";

/**
 * A nurse manage patient checks
 */
export class Manager extends Staff {
  constructor(name: string, age: number,category: Role, gender: Gender,protected salary: number,phone?:number) {
    super(name, age,category, gender,salary); 
  }
}