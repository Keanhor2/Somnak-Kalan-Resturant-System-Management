import { Gender, Person } from "../Person";

export enum Role {
  CHEIF='CHEIF',
  WAITER='WAITER',
  SECURITY='SECURITY',
  MANAGER='MANAGER',
  ACCOUNTANT='ACCOUNTANT',
}

/**
 * A staff is a personn of the hospital with a salary
 */
export class Staff extends Person {
  constructor(
    protected name: string,
    protected age: number,
    protected category: Role,
    protected gender: Gender,
    protected salary: number,
    protected phone?: string
  ) {
    super(name, age, gender,phone);
  }

 

}
