"use strict";
exports.__esModule = true;
var Book_1 = require("./calendar/Book");
var CustomerBook_1 = require("./calendar/CustomerBook");
var DateTime_1 = require("./calendar/DateTime");
var Customers_1 = require("./human/Customers/Customers");
var Person_1 = require("./human/Person");
var Accountant_1 = require("./human/staff/Accountant");
var Cheif_1 = require("./human/staff/Cheif");
var Manager_1 = require("./human/staff/Manager");
var Security_1 = require("./human/staff/Security");
var Staff_1 = require("./human/staff/Staff");
var Waiter_1 = require("./human/staff/Waiter");
var Rataurant_1 = require("./Rataurant");
var Room_1 = require("./rooms/Room");
var Chairs_1 = require("./rooms/tables/Chairs");
var Tables_1 = require("./rooms/tables/Tables");
/*
    Room Management
*/
//Room eating //
var room1 = new Room_1.Room(1);
var room2 = new Room_1.Room(2);
//Add room to Restaurant
var restaurant = new Rataurant_1.Restaurant('PNC Restuarant', 'Phnom Penh');
restaurant.rooms.addRoom(room1);
restaurant.rooms.addRoom(room2);
//create Tables and add to room
var tables = new Tables_1.Tables();
room1.addTable(tables);
room2.addTable(tables);
//create chair and add to room
var char1 = new Chairs_1.Chair(1);
var char2 = new Chairs_1.Chair(2);
var char3 = new Chairs_1.Chair(3);
var char4 = new Chairs_1.Chair(4);
var char5 = new Chairs_1.Chair(5);
room1.addChair(char1, char2, char3, char4, char5);
// create customer and add to room and CustomerOrder room
var kea = new Customers_1.Customer('kea', 20, Person_1.Gender.MALE, '123456');
var somnak = new Customers_1.Customer('somnak', 19, Person_1.Gender.MALE, '345678');
var cham = new Customers_1.Customer('cham', 20, Person_1.Gender.MALE, '55667');
var narong = new Customers_1.Customer('narong', 20, Person_1.Gender.MALE, '246675');
restaurant.hr.addCustomer(kea, somnak, cham, narong);
//add customers to room
room1.addCustomerToRoom(kea, somnak, narong, cham);
//create date  time start and end Order ROOMS
var start1 = new DateTime_1.DateTimes('Moanday', 'May', 2022, 10);
var end1 = new DateTime_1.DateTimes('Moanday', 'May', 2022, 10);
///
// put in CustomerBook and add to Calendar
// add room that customer book
// add Customer's name book
var bookTable = new CustomerBook_1.CustomerBook(Book_1.BookCategory.CUSTOMERBOOK, start1, end1, room1, kea);
restaurant.calendar.addBook(bookTable);
//MAIN MENU
//list all room in restaurant;
console.log(restaurant.rooms.listRoomInRestart());
//list room that user input id Room
console.log(restaurant.rooms.findRoomByRoomId(room2));
// add staffs
var somnak1 = new Manager_1.Manager('Somnak', 12, Staff_1.Role.MANAGER, Person_1.Gender.MALE, 1000);
var Theary = new Accountant_1.Accountant('Theary', 20, Staff_1.Role.ACCOUNTANT, Person_1.Gender.FEMALE, 600);
var kea1 = new Cheif_1.Cheif('Kea', 20, Staff_1.Role.CHEIF, Person_1.Gender.MALE, 700);
var vanda = new Security_1.Security('Vanda', 22, Staff_1.Role.SECURITY, Person_1.Gender.MALE, 300);
var kana = new Waiter_1.Waiter('Kana', 20, Staff_1.Role.WAITER, Person_1.Gender.FEMALE, 250);
var jock = new Waiter_1.Waiter('Jock', 20, Staff_1.Role.WAITER, Person_1.Gender.MALE, 250);
restaurant.hr.addStaff(somnak1, Theary, kea1, vanda, kana, jock);
//all in restaurant
// console.log(restaurant.hr);
