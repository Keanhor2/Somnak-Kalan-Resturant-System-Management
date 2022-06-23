import { Disease } from "../../medical/Disease";
import { Gender, Person } from "../Person";
import { Staff, StaffCategory } from "./Staff";

/**
 * A doctor is a staff with a mediacal speciality
 */
export class Doctor extends Staff {
  includes(doctor: Doctor) {
    throw new Error("Method not implemented.");
  }
  private speciality?: Disease;
    Disease: any;

  constructor(name: string, age: number,category: StaffCategory, gender: Gender) {
    super(name, age,category, gender);
  }

  hasSpeciality(): boolean {
    return this.speciality !== undefined;
  }

  setSpeciality(speciality: Disease) {
    this.speciality = speciality;
  }

  getSpeciality() {
    return this.speciality;
  }
}
