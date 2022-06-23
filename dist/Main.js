"use strict";
// TEST THE MODEL HERE
exports.__esModule = true;
var Hospital_1 = require("./Hospital");
var Patient_1 = require("./human/patient/Patient");
var Bed_1 = require("./rooms/Bed");
var Room_1 = require("./rooms/Room");
var Person_1 = require("./human/Person");
var Doctor_1 = require("./human/staff/Doctor");
var Nurse_1 = require("./human/staff/Nurse");
var Staff_1 = require("./human/staff/Staff");
var DateTime_1 = require("./calendar/DateTime");
var DoctorAppointment_1 = require("./calendar/DoctorAppointment");
var Event_1 = require("./calendar/Event");
var Disease_1 = require("./medical/Disease");
// create new hospitals
var phnomPenhHospital = new Hospital_1.Hospital('Phnom Penh', 'Phnom Penh,ST 371');
//ROOM  and add to hospitals
var room1 = new Room_1.Room(1);
var room2 = new Room_1.Room(2);
phnomPenhHospital.rooms.addRoom(room1);
phnomPenhHospital.rooms.addRoom(room2);
// Bed and add bed to room
var bed1 = new Bed_1.Bed(1);
var bed2 = new Bed_1.Bed(2);
room1.addBed(bed1);
room2.addBed(bed2);
//create  patient
var rady = new Patient_1.Patient('Rady', 20, Person_1.Gender.MALE);
var jeanne = new Patient_1.Patient('Jeanne', 20, Person_1.Gender.FEMALE);
rady.addDisease(Disease_1.Disease.CANCER);
jeanne.addDisease(Disease_1.Disease.EYES);
// staff/HummanManager and add to hospitals
phnomPenhHospital.hr.adddPatient(rady);
phnomPenhHospital.hr.adddPatient(jeanne);
bed1.setPatient(rady);
bed2.setPatient(jeanne);
//add doctor(HIM) and nurse(Ronan)
var him = new Doctor_1.Doctor('Him', 20, Staff_1.StaffCategory.DOCTOR, Person_1.Gender.MALE);
var somnak = new Doctor_1.Doctor('Him', 20, Staff_1.StaffCategory.DOCTOR, Person_1.Gender.MALE);
var ronan = new Nurse_1.Nurse('Ronan', 25, Staff_1.StaffCategory.NURSE, Person_1.Gender.MALE);
him.setSpeciality(Disease_1.Disease.CANCER);
somnak.setSpeciality(Disease_1.Disease.CANCER);
phnomPenhHospital.hr.addStaff(him);
phnomPenhHospital.hr.addStaff(ronan);
phnomPenhHospital.hr.addStaff(somnak);
//write to create a doctor appointment
var start = new DateTime_1.DateTime(27, 6, 2022, 8);
var end = new DateTime_1.DateTime(27, 6, 2022, 10);
var appointment1 = new DoctorAppointment_1.DoctorAppointment(Event_1.EventCategory.DOCTOR_APPOINTEMENT, start, end, him, rady);
var appointment2 = new DoctorAppointment_1.DoctorAppointment(Event_1.EventCategory.DOCTOR_APPOINTEMENT, start, end, him, jeanne);
phnomPenhHospital.calendar.addEvent(appointment1);
phnomPenhHospital.calendar.addEvent(appointment2);
console.log(phnomPenhHospital.hr.getADoctorWithSkill());
