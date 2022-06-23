// TEST THE MODEL HERE

import { Hospital } from "./Hospital";
import { Patient } from "./human/patient/Patient";
import { Bed } from "./rooms/Bed";
import { Room } from "./rooms/Room";
import { RoomsManager } from "./rooms/RoomsManager";
import { Gender, Person } from "./human/Person";
import { HumanManager } from "./human/HumanManager";
import { Doctor } from "./human/staff/Doctor";
import { Nurse } from "./human/staff/Nurse";
import { StaffCategory } from "./human/staff/Staff";
import { DateTime } from "./calendar/DateTime";
import { DoctorAppointment } from "./calendar/DoctorAppointment";
import { EventCategory } from "./calendar/Event";
import { Disease } from "./medical/Disease";

// create new hospitals
let phnomPenhHospital = new Hospital('Phnom Penh','Phnom Penh,ST 371');
//ROOM  and add to hospitals
let room1 = new Room(1);
let room2 = new Room(2);

phnomPenhHospital.rooms.addRoom(room1);
phnomPenhHospital.rooms.addRoom(room2);

// Bed and add bed to room
let bed1 = new Bed(1);
let bed2 = new Bed(2);
room1.addBed(bed1);
room2.addBed(bed2);
//create  patient
let rady = new Patient('Rady',20,Gender.MALE);
let jeanne = new Patient('Jeanne',20,Gender.FEMALE);
rady.addDisease(Disease.CANCER);
jeanne.addDisease(Disease.EYES);
// staff/HummanManager and add to hospitals
phnomPenhHospital.hr.adddPatient(rady);
phnomPenhHospital.hr.adddPatient(jeanne);
bed1.setPatient(rady);
bed2.setPatient(jeanne);

//add doctor(HIM) and nurse(Ronan)
let him = new Doctor('Him',20,StaffCategory.DOCTOR,Gender.MALE);
let somnak = new Doctor('Him',20,StaffCategory.DOCTOR,Gender.MALE);
let ronan = new Nurse('Ronan',25,StaffCategory.NURSE,Gender.MALE);
him.setSpeciality(Disease.CANCER)
somnak.setSpeciality(Disease.CANCER)

phnomPenhHospital.hr.addStaff(him)
phnomPenhHospital.hr.addStaff(ronan)
phnomPenhHospital.hr.addStaff(somnak)

//write to create a doctor appointment
let start = new DateTime(27,6,2022,8);
let end = new DateTime(27,6,2022,10);
let appointment1 = new DoctorAppointment(EventCategory.DOCTOR_APPOINTEMENT,start,end,him,rady);
let appointment2 = new DoctorAppointment(EventCategory.DOCTOR_APPOINTEMENT,start,end,him,jeanne);
phnomPenhHospital.calendar.addEvent(appointment1)
phnomPenhHospital.calendar.addEvent(appointment2)


console.log(phnomPenhHospital.hr.getADoctorWithSkill());


