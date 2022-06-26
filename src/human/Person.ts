export enum Gender {
  MALE='MALE',
  FEMALE='FEMALE',
}

/**
 * Any personn in the hospital - common attributes
 */
export abstract class Person {
  constructor(
    protected name: string,
    protected age: number,
    protected gender: Gender,
    protected phone?: string
  ) {}

}
