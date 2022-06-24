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
  protected salary: number = 0; // by default

  constructor(
    name: string,
    age: number,
    protected category: Role,
    gender: Gender
  ) {
    super(name, age, gender);
  }

 

}
