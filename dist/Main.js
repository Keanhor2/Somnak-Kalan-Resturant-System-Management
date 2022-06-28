"use strict";
exports.__esModule = true;
var DateTime_1 = require("./calendar/DateTime");
var Customers_1 = require("./human/Customers/Customers");
var Person_1 = require("./human/Person");
var Accountant_1 = require("./human/staff/Accountant");
var Chef_1 = require("./human/staff/Chef");
var Manager_1 = require("./human/staff/Manager");
var Security_1 = require("./human/staff/Security");
var Staff_1 = require("./human/staff/Staff");
var Waiter_1 = require("./human/staff/Waiter");
var Rataurant_1 = require("./Rataurant");
var Drinks_1 = require("./rooms/Kitchen/Drinks");
var EnumDrink_1 = require("./rooms/Kitchen/EnumDrink");
var EnumFood_1 = require("./rooms/Kitchen/EnumFood");
var Food_1 = require("./rooms/Kitchen/Food");
var MenuItem_1 = require("./rooms/Orders/MenuItem");
var Orders_1 = require("./rooms/Orders/Orders");
var Room_1 = require("./rooms/Room");
var Tables_1 = require("./rooms/tables/Tables");
/*
    Room Management
*/
//Room eating //
var room1 = new Room_1.Room(1);
//Add room to Restaurant
var restaurant = new Rataurant_1.Restaurant('PNC Restuarant', 'Phnom Penh');
restaurant.rooms.addRoom(room1);
//create Tables and add to room
var tables = new Tables_1.Tables(1);
room1.addTable(tables);
// create customer and add to room and CustomerOrder room
var kea = new Customers_1.Customer('kea', 20, Person_1.Gender.MALE, '123456');
var somnak = new Customers_1.Customer('somnak', 19, Person_1.Gender.MALE, '345678');
var cham = new Customers_1.Customer('cham', 20, Person_1.Gender.MALE, '55667');
var narong = new Customers_1.Customer('narong', 20, Person_1.Gender.MALE, '246675');
restaurant.hr.addCustomer(kea, somnak, cham, narong);
// add a Manager
var somnak1 = new Manager_1.Manager('Somnak', 12, Staff_1.Role.MANAGER, Person_1.Gender.MALE);
restaurant.hr.addStaff(somnak1);
// add two accountants
var theary = new Accountant_1.Accountant('Theary', 20, Staff_1.Role.ACCOUNTANT, Person_1.Gender.FEMALE);
var nana = new Accountant_1.Accountant('Nana', 20, Staff_1.Role.ACCOUNTANT, Person_1.Gender.FEMALE);
restaurant.hr.addStaff(theary, nana);
// add 5 cheifs
var keai = new Chef_1.Chef('Kea', 20, Staff_1.Role.CHEF, Person_1.Gender.MALE);
var chan = new Chef_1.Chef('Chan', 20, Staff_1.Role.CHEF, Person_1.Gender.FEMALE);
var jan = new Chef_1.Chef('Jan', 20, Staff_1.Role.CHEF, Person_1.Gender.FEMALE);
var ronan = new Chef_1.Chef('Ronan', 20, Staff_1.Role.CHEF, Person_1.Gender.MALE);
var cham1 = new Chef_1.Chef('Cham', 20, Staff_1.Role.CHEF, Person_1.Gender.MALE);
restaurant.hr.addStaff(keai, chan, jan, ronan, cham1);
// add two security
var vanda = new Security_1.Security('Vanda', 22, Staff_1.Role.SECURITY, Person_1.Gender.MALE);
var sok = new Security_1.Security('Sok', 22, Staff_1.Role.SECURITY, Person_1.Gender.MALE);
restaurant.hr.addStaff(vanda, sok);
// add 20 waiter-
var kana = new Waiter_1.Waiter('Kana', 20, Staff_1.Role.WAITER, Person_1.Gender.FEMALE);
var jock = new Waiter_1.Waiter('Jock', 20, Staff_1.Role.WAITER, Person_1.Gender.MALE);
var sorey = new Waiter_1.Waiter('Sorey', 20, Staff_1.Role.WAITER, Person_1.Gender.FEMALE);
var jonh = new Waiter_1.Waiter('Jonh', 20, Staff_1.Role.WAITER, Person_1.Gender.MALE);
var chakrya = new Waiter_1.Waiter('Chakrya', 20, Staff_1.Role.WAITER, Person_1.Gender.FEMALE);
var chet = new Waiter_1.Waiter('Chet', 20, Staff_1.Role.WAITER, Person_1.Gender.MALE);
var jav = new Waiter_1.Waiter('Jav', 20, Staff_1.Role.WAITER, Person_1.Gender.MALE);
var virak = new Waiter_1.Waiter('Virak', 20, Staff_1.Role.WAITER, Person_1.Gender.MALE);
var son = new Waiter_1.Waiter('Son', 20, Staff_1.Role.WAITER, Person_1.Gender.FEMALE);
var kan = new Waiter_1.Waiter('Kan', 20, Staff_1.Role.WAITER, Person_1.Gender.MALE);
restaurant.hr.addStaff(kana, jock, sorey, jonh, chakrya, chet, jav, virak, son, kan);
//create date  time start and end Order ROOMS
var start1 = new DateTime_1.DateTimes('Moanday', 'May', 2022, 10);
/*
    food
*/
var hamburgar = new Food_1.Foods(1, EnumFood_1.FoodCategory.HAMBURGAR, 100);
var rice = new Food_1.Foods(2, EnumFood_1.FoodCategory.RICE, 200);
var dessert = new Food_1.Foods(3, EnumFood_1.FoodCategory.DESSERT, 300);
/*
    drink
*/
var beer = new Drinks_1.Drinks(1, EnumDrink_1.DrinkCategory.BEER, 200);
var coke = new Drinks_1.Drinks(2, EnumDrink_1.DrinkCategory.COKE, 200);
var string = new Drinks_1.Drinks(3, EnumDrink_1.DrinkCategory.STRING, 200);
var winner = new Drinks_1.Drinks(4, EnumDrink_1.DrinkCategory.WINER, 2000);
var menuItem = new MenuItem_1.MenuItem();
menuItem.addFood(hamburgar);
menuItem.addDrink(winner, beer);
/*
    add Table to Order
*/
var order = new Orders_1.Orders(1);
order.addTable(tables);
order.setTimes(start1);
/*
    add Customer to Order
*/
order.addCustomer(kea, somnak);
/*
    add MenuItem to Order
*/
order.addMenuItem(menuItem);
//MAIN MENU
console.log(order);
