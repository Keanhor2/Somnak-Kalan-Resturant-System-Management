import { Gender, Person } from "../Person";

export enum Role {
  CHEIF='CHEIF',
  WAITER='WAITER',
  SECURITY='SECURITY',
  MANAGER='MANAGER',
  ACCOUNTANT='ACCOUNTANT',
}

export enum Salary {
  CHEIF_SALARY=700,
  ACCOUNTANT_SALARY =800,
  SECURITY_SALARY=500,
  WAITER_SALARY=300,
  MANAGER_SALARY=1000
  
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
    protected salary: Salary,
    protected phone?: string,
  ) {
    super(name, age, gender,phone);
  }

 

}
