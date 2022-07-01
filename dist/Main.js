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
var Drinks_1 = require("./rooms/stock/Drinks");
var EnumDrink_1 = require("./rooms/stock/EnumDrink");
var EnumFood_1 = require("./rooms/stock/EnumFood");
var Food_1 = require("./rooms/stock/Food");
var Invoice_1 = require("./rooms/Orders/Invoice");
var MenuItem_1 = require("./rooms/Orders/MenuItem");
var Orders_1 = require("./rooms/Orders/Orders");
var Tables_1 = require("./rooms/tables/Tables");
var Room_1 = require("./rooms/Room");
var Payment_1 = require("./rooms/Orders/Payment");
var CheckPayment_1 = require("./rooms/Orders/CheckPayment");
/*
    Room Management
*/
/*
    Create Restaurant
*/
var restaurant = new Rataurant_1.Restaurant('PNC Restuarant', 'Phnom Penh');
/*
    Create room
    Restaurant has only one room
*/
var room1 = new Room_1.Room(1);
restaurant.rooms.addRoom(room1);
/*
    Create management
    Restaurant has only one room
*/
var somnak1 = new Manager_1.Manager('Somnak', 12, Staff_1.Role.MANAGER, Person_1.Gender.MALE);
restaurant.hr.addStaff(somnak1);
/*
    Two Accountant
*/
var theary = new Accountant_1.Accountant('Theary', 20, Staff_1.Role.ACCOUNTANT, Person_1.Gender.FEMALE);
var Kiki = new Accountant_1.Accountant('Kiki', 20, Staff_1.Role.ACCOUNTANT, Person_1.Gender.FEMALE);
restaurant.hr.addStaff(theary, Kiki);
/*
    Five chefs
*/
var keai = new Chef_1.Chef('Kea', 20, Staff_1.Role.CHEF, Person_1.Gender.MALE);
var chan = new Chef_1.Chef('Chan', 20, Staff_1.Role.CHEF, Person_1.Gender.FEMALE);
var jan = new Chef_1.Chef('Jan', 20, Staff_1.Role.CHEF, Person_1.Gender.FEMALE);
var ronan = new Chef_1.Chef('Ronan', 20, Staff_1.Role.CHEF, Person_1.Gender.MALE);
var cham1 = new Chef_1.Chef('Cham', 20, Staff_1.Role.CHEF, Person_1.Gender.MALE);
restaurant.hr.addStaff(keai, chan, jan, ronan, cham1);
/*
    Two security
*/
var vanda = new Security_1.Security('Vanda', 22, Staff_1.Role.SECURITY, Person_1.Gender.MALE);
var sok = new Security_1.Security('Sok', 22, Staff_1.Role.SECURITY, Person_1.Gender.MALE);
restaurant.hr.addStaff(vanda, sok);
/*
    4 waiter
*/
var chanSok = new Waiter_1.Waiter('chanSok', 20, Staff_1.Role.WAITER, Person_1.Gender.FEMALE);
var Koev = new Waiter_1.Waiter('Koev', 20, Staff_1.Role.WAITER, Person_1.Gender.FEMALE);
var sorey = new Waiter_1.Waiter('Sorey', 20, Staff_1.Role.WAITER, Person_1.Gender.FEMALE);
var jonh = new Waiter_1.Waiter('Jonh', 20, Staff_1.Role.WAITER, Person_1.Gender.MALE);
restaurant.hr.addStaff(chanSok, Koev, sorey, jonh);
/*
    Customer in Restaurant
    and Add customer to restaurant
*/
var kea = new Customers_1.Customer('kea', 20, Person_1.Gender.MALE, '123456');
var somnak = new Customers_1.Customer('somnak', 19, Person_1.Gender.MALE, '345678');
var cham = new Customers_1.Customer('cham', 20, Person_1.Gender.MALE, '55667');
var narong = new Customers_1.Customer('narong', 20, Person_1.Gender.MALE, '246675');
restaurant.hr.addCustomer(kea, somnak, cham, narong);
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
/*
    create menuItem
*/
var menuItem1 = new MenuItem_1.MenuItem();
var menuItem2 = new MenuItem_1.MenuItem();
/*
    add Food or Drinks to menuItem
*/
menuItem1.addFood(hamburgar);
menuItem2.addFood(hamburgar, dessert);
menuItem2.addDrink(winner, beer);
/*
    Create Time that Customers in Restaurant
*/
var start1 = new DateTime_1.DateTimes('Moanday', 'May', 2022, 10);
var start2 = new DateTime_1.DateTimes('Moanday', 'May', 2022, 9);
/*
    Create Tables
*/
var tables1 = new Tables_1.Tables(1);
var tables2 = new Tables_1.Tables(2);
var tables3 = new Tables_1.Tables(3);
var tables4 = new Tables_1.Tables(4);
/*
    add Table to room
*/
room1.addTableToRoom(tables1, tables2, tables3, tables4);
/*
    add Table to Order
*/
var order = new Orders_1.Orders(1, start1, tables1, menuItem1, chanSok, kea);
var order3 = new Orders_1.Orders(2, start1, tables2, menuItem2, Koev, kea);
var order2 = new Orders_1.Orders(2, start2, tables2, menuItem2, Koev, somnak);
var order4 = new Orders_1.Orders(2, start2, tables2, menuItem2, sorey, somnak);
/*
    Create invoice
*/
var invoice1 = new Invoice_1.Invoice(1);
var invoice2 = new Invoice_1.Invoice(2);
/*
    Create Order that 1 invoice 1 customer but has many orders
*/
invoice1.addCustomerDone(order, order3);
invoice2.addCustomerDone(order2, order4);
/*
    Create payment
*/
var payment1 = new Payment_1.Payment(kea, tables1, false);
var payment2 = new Payment_1.Payment(somnak, tables2, true);
/*
  addInvoice
*/
payment1.addInvoice(invoice1);
payment2.addInvoice(invoice2);
/*
  checkPayment
*/
var checkPayment = new CheckPayment_1.CheckPayment();
/*
 add  payment1
*/
checkPayment.addPayment(payment1, payment2);
//MAIN MENU
/*     STUDENT 1    */
/*
 @List Staff
*/
// console.log(restaurant.hr.getStaff());
/*
 /*
  @get all Staff in Restaurant
*/
//   console.log(restaurant.hr.countAllStaffInRestaurants());
/*
  @Get all Payment for staff in Month of restaurant
*/
// console.log(restaurant.hr.getRestaurantsSpendInMonth());
/*
  @listRolesOfStaff
*/
// console.log(restaurant.hr.listRolesOfStaff(Role.ACCOUNTANT));
// -------------------STUDENT  2----------------
/*
 @Invoice
 getInvoicesBy() by name
*/
// console.log(invoice1.getInvoicesBy(kea));
/*
 Customer is Pay or Not Pay
 isPayAlready()
 @customer @id of table
*/
//Note Pay
// payment1.isPayAlready(kea,tables1)
//Pay
// payment2.isPayAlready(somnak,tables2)
/*
  checkListCustomerHasPayAndNotPay
  @isPay, input True or False
*/
// console.log(checkPayment.checkListCustomerHasPayAndNotPay(true));
// console.log(checkPayment.checkListCustomerHasPayAndNotPay(false));
/*
  checkCustomerByTime
  @time
*/
// console.log(checkPayment.checkCustomerByTime(9));
/*
checkAmountOfCustomerByTimeAndTable
@time
@id of table
*/
// console.log(checkPayment.checkAmountOfCustomerByTimeAndTable(9,1));
/*
checkFoodDrinkCustomerOrderByName
@Customer
*/
console.log(checkPayment.checkFoodDrinkCustomerOrderByName(kea));
