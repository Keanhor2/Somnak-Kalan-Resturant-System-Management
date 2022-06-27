"use strict";
exports.__esModule = true;
var Customers_1 = require("./human/Customers/Customers");
var Person_1 = require("./human/Person");
var Accountant_1 = require("./human/staff/Accountant");
var Cheif_1 = require("./human/staff/Cheif");
var Manager_1 = require("./human/staff/Manager");
var Security_1 = require("./human/staff/Security");
var Staff_1 = require("./human/staff/Staff");
var Waiter_1 = require("./human/staff/Waiter");
var Rataurant_1 = require("./Rataurant");
var resturant = new Rataurant_1.Resturant('SK RESTAURANT', 'PHNOM PENH');
// add staffs
// add a Manager
var somnak = new Manager_1.Manager('Somnak', 12, Staff_1.Role.MANAGER, Person_1.Gender.MALE, Staff_1.Salary.MANAGER_SALARY);
// add two accountants
var theary = new Accountant_1.Accountant('Theary', 20, Staff_1.Role.ACCOUNTANT, Person_1.Gender.FEMALE, Staff_1.Salary.ACCOUNTANT_SALARY);
var nana = new Accountant_1.Accountant('Nana', 20, Staff_1.Role.ACCOUNTANT, Person_1.Gender.FEMALE, Staff_1.Salary.ACCOUNTANT_SALARY);
// add 5 cheifs
var kea = new Cheif_1.Cheif('Kea', 20, Staff_1.Role.CHEIF, Person_1.Gender.MALE, Staff_1.Salary.CHEIF_SALARY);
var chan = new Cheif_1.Cheif('Chan', 20, Staff_1.Role.CHEIF, Person_1.Gender.FEMALE, Staff_1.Salary.CHEIF_SALARY);
var jan = new Cheif_1.Cheif('Jan', 20, Staff_1.Role.CHEIF, Person_1.Gender.FEMALE, Staff_1.Salary.CHEIF_SALARY);
var ronan = new Cheif_1.Cheif('Ronan', 20, Staff_1.Role.CHEIF, Person_1.Gender.MALE, Staff_1.Salary.CHEIF_SALARY);
var cham = new Cheif_1.Cheif('Cham', 20, Staff_1.Role.CHEIF, Person_1.Gender.MALE, Staff_1.Salary.CHEIF_SALARY);
// add two security
var vanda = new Security_1.Security('Vanda', 22, Staff_1.Role.SECURITY, Person_1.Gender.MALE, Staff_1.Salary.SECURITY_SALARY);
// add 20 waiter-
var kana = new Waiter_1.Waiter('Kana', 20, Staff_1.Role.WAITER, Person_1.Gender.FEMALE, Staff_1.Salary.WAITER_SALARY);
var jock = new Waiter_1.Waiter('Jock', 20, Staff_1.Role.WAITER, Person_1.Gender.MALE, Staff_1.Salary.WAITER_SALARY);
var sorey = new Waiter_1.Waiter('Sorey', 20, Staff_1.Role.WAITER, Person_1.Gender.FEMALE, Staff_1.Salary.WAITER_SALARY);
var jonh = new Waiter_1.Waiter('Jonh', 20, Staff_1.Role.WAITER, Person_1.Gender.MALE, Staff_1.Salary.WAITER_SALARY);
var chakrya = new Waiter_1.Waiter('Chakrya', 20, Staff_1.Role.WAITER, Person_1.Gender.FEMALE, Staff_1.Salary.WAITER_SALARY);
var chet = new Waiter_1.Waiter('Chet', 20, Staff_1.Role.WAITER, Person_1.Gender.MALE, Staff_1.Salary.WAITER_SALARY);
var jav = new Waiter_1.Waiter('Jav', 20, Staff_1.Role.WAITER, Person_1.Gender.MALE, Staff_1.Salary.WAITER_SALARY);
var virak = new Waiter_1.Waiter('Virak', 20, Staff_1.Role.WAITER, Person_1.Gender.MALE, Staff_1.Salary.WAITER_SALARY);
var son = new Waiter_1.Waiter('Son', 20, Staff_1.Role.WAITER, Person_1.Gender.FEMALE, Staff_1.Salary.WAITER_SALARY);
var kan = new Waiter_1.Waiter('Kan', 20, Staff_1.Role.WAITER, Person_1.Gender.MALE, Staff_1.Salary.WAITER_SALARY);
resturant.hr.addStaff(somnak, theary, nana, kea, vanda, kana, jock, sorey, jonh, chakrya, chet, jav, virak, son, kan);
// add customers 
var kaka = new Customers_1.Customer('Kaka', 22, Person_1.Gender.FEMALE, '09640500');
var kiki = new Customers_1.Customer('Kiki', 22, Person_1.Gender.FEMALE, '097444434');
var kham = new Customers_1.Customer('Kham', 22, Person_1.Gender.MALE, '0124893343');
resturant.hr.addCustomer(kaka, kiki, kham);
console.log(resturant.hr);
