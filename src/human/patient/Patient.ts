import { Disease } from "../../medical/Disease";

import { Gender, Person } from "../Person";

/**
 * A patient is a personn with some heath issues
 */
export class Patient extends Person {
  getSpeciality() {
    throw new Error("Method not implemented.");
  }
  private diseases: Disease[] = [];

  constructor(name: string, age: number, gender: Gender) {
    super(name, age, gender);
  }

  addDisease(disease: Disease) {
    this.diseases.push(disease);
  }
}
