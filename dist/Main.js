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
var Drinks_1 = require("./rooms/Kitchen/Drinks");
var EnumDrink_1 = require("./rooms/Kitchen/EnumDrink");
var EnumFood_1 = require("./rooms/Kitchen/EnumFood");
var Food_1 = require("./rooms/Kitchen/Food");
var Kitchen_1 = require("./rooms/Kitchen/Kitchen");
var Menu_1 = require("./rooms/Orders/Menu");
var MenuItem_1 = require("./rooms/Orders/MenuItem");
var Room_1 = require("./rooms/Room");
var Chairs_1 = require("./rooms/tables/Chairs");
var Tables_1 = require("./rooms/tables/Tables");
/*
    Room Management
*/
//Room eating //
var room1 = new Room_1.Room(1);
var room2 = new Room_1.Room(2);
var room3 = new Room_1.Room(3);
var room4 = new Room_1.Room(4);
var room5 = new Room_1.Room(5);
var room6 = new Room_1.Room(6);
var room7 = new Room_1.Room(7);
var room8 = new Room_1.Room(8);
var room9 = new Room_1.Room(9);
var room10 = new Room_1.Room(10);
//Add room to Restaurant
var restaurant = new Rataurant_1.Restaurant('PNC Restuarant', 'Phnom Penh');
restaurant.rooms.addRoom(room1, room2, room3, room4, room5, room6, room7, room8, room9, room10);
//create Tables and add to room
var tables = new Tables_1.Tables();
room1.addTable(tables);
room2.addTable(tables);
room3.addTable(tables);
// create customer and add to room and CustomerOrder room
var kea = new Customers_1.Customer('kea', 20, Person_1.Gender.MALE, '123456');
var somnak = new Customers_1.Customer('somnak', 19, Person_1.Gender.MALE, '345678');
var cham = new Customers_1.Customer('cham', 20, Person_1.Gender.MALE, '55667');
var narong = new Customers_1.Customer('narong', 20, Person_1.Gender.MALE, '246675');
restaurant.hr.addCustomer(kea, somnak, cham, narong);
//create chair and add to room
var char1 = new Chairs_1.Chair(1, kea);
var char2 = new Chairs_1.Chair(2, somnak);
var char3 = new Chairs_1.Chair(3, cham);
var char4 = new Chairs_1.Chair(4);
var char5 = new Chairs_1.Chair(5, narong);
room1.addChair(char1, char2, char3, char4, char5);
room2.addChair(char4, char5);
//add customers to room
room1.addCustomerToRoom(kea, somnak, narong, cham);
room2.addCustomerToRoom(kea, somnak, narong, cham);
//create date  time start and end Order ROOMS
var start1 = new DateTime_1.DateTimes('Moanday', 'May', 2022, 10);
var end1 = new DateTime_1.DateTimes('Moanday', 'May', 2022, 10);
///
// put in CustomerBook and add to Calendar
// add room that customer book
// add Customer's name book
var bookTable = new CustomerBook_1.CustomerBook(Book_1.BookCategory.CUSTOMERBOOK, start1, end1, room1, kea);
var bookTable1 = new CustomerBook_1.CustomerBook(Book_1.BookCategory.CUSTOMERBOOK, start1, end1, room2, somnak);
var bookTable2 = new CustomerBook_1.CustomerBook(Book_1.BookCategory.CUSTOMERBOOK, start1, end1, room2, cham);
restaurant.calendar.addBook(bookTable, bookTable1);
// add staffs
<<<<<<< HEAD
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
=======
var somnak1 = new Manager_1.Manager('Somnak', 12, Staff_1.Role.MANAGER, Person_1.Gender.MALE, 1000);
var Theary = new Accountant_1.Accountant('Theary', 20, Staff_1.Role.ACCOUNTANT, Person_1.Gender.FEMALE, 600);
var kea1 = new Cheif_1.Chef('Kea', 20, Staff_1.Role.CHEIF, Person_1.Gender.MALE, 700);
var kea2 = new Cheif_1.Chef('Kea', 20, Staff_1.Role.CHEIF, Person_1.Gender.MALE, 700);
var kea3 = new Cheif_1.Chef('Kea', 20, Staff_1.Role.CHEIF, Person_1.Gender.MALE, 700);
var vanda = new Security_1.Security('Vanda', 22, Staff_1.Role.SECURITY, Person_1.Gender.MALE, 300);
var kana = new Waiter_1.Waiter('Kana', 20, Staff_1.Role.WAITER, Person_1.Gender.FEMALE, 250);
var jock = new Waiter_1.Waiter('Jock', 20, Staff_1.Role.WAITER, Person_1.Gender.MALE, 250);
restaurant.hr.addStaff(somnak1, Theary, kea1, vanda, kana, jock);
/*
    food and drink
*/
var hamburgar = new Food_1.Foods(1, EnumFood_1.FoodCategory.HAMBURGAR, 100);
var rice = new Food_1.Foods(2, EnumFood_1.FoodCategory.RICE, 200);
var dessert = new Food_1.Foods(3, EnumFood_1.FoodCategory.DESSERT, 300);
var beer = new Drinks_1.Drinks(1, EnumDrink_1.DrinkCategory.BEER, 200);
var coke = new Drinks_1.Drinks(2, EnumDrink_1.DrinkCategory.COKE, 200);
var string = new Drinks_1.Drinks(3, EnumDrink_1.DrinkCategory.STRING, 200);
var winner = new Drinks_1.Drinks(4, EnumDrink_1.DrinkCategory.WINER, 2000);
/*
    add food and drink to menuItem
*/
var menuItem = new MenuItem_1.MenuItem();
menuItem.addFood(hamburgar, rice, dessert);
menuItem.addDrink(beer, coke, string, winner);
/*
    add menuItem to menu
*/
var menu = new Menu_1.Menu();
menu.addMenuItem(menuItem);
/*
    add menu to table
*/
tables.addMenuToTable(menu);
/*
    add chef to kitchen
*/
var kitchens = new Kitchen_1.Kitchen();
kitchens.addChefToKitchen(kea1, kea2, kea3);
/*
    add kitchen to restaurant
*/
restaurant.rooms.kitchen = kitchens;
//MAIN MENU
//all in restaurant
<<<<<<< HEAD
console.log(restaurant.calendar.getAllBooksByCustomer());
=======
console.log(menu.getAllItemInMenu());
>>>>>>> 4c8782a4b4d30fca48974c3f15db90c7675fe06c
>>>>>>> 5d6a3afa7ed473572f1f7ac85ff30f3afa3719c9
