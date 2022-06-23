import { Doctor } from "../human/staff/Doctor";
import { StaffCategory } from "../human/staff/Staff";
import { DateTime } from "./DateTime";
import { DoctorAppointment } from "./DoctorAppointment";
import { Event } from "./Event";

export class CalendarManager {
  public events: Event[] = [];
  addEvent(event: Event) {
    this.events.push(event);
  }
  /**
   * @returns all appointement for the given doctor
   */
  getAllAppointementFor(doctor: Doctor) {
      if (doctor['category'] ==StaffCategory.DOCTOR){
        return this.events;
      }
    }
  
  /**
   *
   * @returns true if the doctor is free at given date (no appointement) - false otherwise
   */
  isDoctorFree(date: DateTime): boolean {
    return false; //TODO
  }
}
