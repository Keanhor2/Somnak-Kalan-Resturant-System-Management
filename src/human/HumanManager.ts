import { Patient } from "./patient/Patient";
import { Doctor } from "./staff/Doctor";
import { Staff, StaffCategory } from "./staff/Staff";

export class HumanManager {
  private patients: Patient[] = [];
  private staffs: Staff[] = [];

  adddPatient(patient: Patient) {
    this.patients.push(patient);
  }

  getdPatients() {
    return this.patients;
  }

  addStaff(staff: Staff) {
    this.staffs.push(staff);
  }

  getStaffs() {
    return this.staffs;
  }

  /**
   *
   * @returns the first doctor found among the staff, having the given disease as speciality
   */
  getADoctorWithSkill(): Doctor | undefined {
    let result: Doctor | undefined;
    for (let staff of this.staffs) {
      let doctor = staff as Doctor;
      if (doctor['category'] === StaffCategory.DOCTOR) {
        if (doctor.hasSpeciality()) {
          for (let patient of this.patients) {
            for (let disease of patient['diseases']) {
              if (doctor.getSpeciality() === disease) {
                result = doctor;
              }
            }
          }

        }
      }
    }
    return result;

  }
}
