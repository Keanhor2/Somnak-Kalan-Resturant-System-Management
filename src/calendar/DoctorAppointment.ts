import { Doctor } from "../human/staff/Doctor";
import { Patient } from "../human/patient/Patient";
import { DateTime } from "./DateTime";
import { Event, EventCategory } from "./Event";

export class DoctorAppointment extends Event {
  constructor(
    category: EventCategory,
    start: DateTime,
    end: DateTime,
    private doctor: Doctor,
    private patient: Patient
  ) {
    super(category, start, end);
  }
}
