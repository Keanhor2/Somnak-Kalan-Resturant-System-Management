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
var somnak = new Manager_1.Manager('Somnak', 12, Staff_1.Role.MANAGER, Person_1.Gender.MALE, 1000);
var Theary = new Accountant_1.Accountant('Theary', 20, Staff_1.Role.ACCOUNTANT, Person_1.Gender.FEMALE, 600);
var kea = new Cheif_1.Cheif('Kea', 20, Staff_1.Role.CHEIF, Person_1.Gender.MALE, 700);
var vanda = new Security_1.Security('Vanda', 22, Staff_1.Role.SECURITY, Person_1.Gender.MALE, 300);
var kana = new Waiter_1.Waiter('Kana', 20, Staff_1.Role.WAITER, Person_1.Gender.FEMALE, 250);
var jock = new Waiter_1.Waiter('Jock', 20, Staff_1.Role.WAITER, Person_1.Gender.MALE, 250);
resturant.hr.addStaff(somnak, Theary, kea, vanda, kana, jock);
// add customers
var kaka = new Customers_1.Customer('Kaka', 22, Person_1.Gender.FEMALE, '09640500');
var kiki = new Customers_1.Customer('Kiki', 22, Person_1.Gender.FEMALE, '097444434');
var kham = new Customers_1.Customer('Kham', 22, Person_1.Gender.MALE, '0124893343');
resturant.hr.addCustomer(kaka, kiki, kham);
console.log(resturant.hr);
