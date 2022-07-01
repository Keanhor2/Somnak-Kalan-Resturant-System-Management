
import { DateTimes } from "./calendar/DateTime";
import { Customer } from "./human/Customers/Customers";
import { Gender } from "./human/Person";
import { Accountant } from "./human/staff/Accountant";
import { Chef } from "./human/staff/Chef"
import { Manager } from "./human/staff/Manager";
import { Security } from "./human/staff/Security";
import { Role } from "./human/staff/Staff";
import { Waiter } from "./human/staff/Waiter";
import { Restaurant } from "./Rataurant";
import { Drinks } from "./rooms/stock/Drinks";
import { DrinkCategory } from "./rooms/stock/EnumDrink";
import { FoodCategory } from "./rooms/stock/EnumFood";
import { Foods } from "./rooms/stock/Food";
import { Invoice } from "./rooms/Orders/Invoice";
import { MenuItem } from "./rooms/Orders/MenuItem";
import { Orders } from "./rooms/Orders/Orders";
import { Tables } from "./rooms/tables/Tables";
import { Room } from "./rooms/Room";
import { Payment } from "./rooms/Orders/Payment";
import { CheckPayment } from "./rooms/Orders/CheckPayment";
/* 
    Room Management
*/

/* 
    Create Restaurant 
*/

let restaurant = new Restaurant('PNC Restuarant','Phnom Penh');
/* 
    Create room
    Restaurant has only one room
*/
let room1 = new Room(1);
restaurant.rooms.addRoom(room1);
/* 
    Create management
    Restaurant has only one room
*/
let somnak1 = new Manager('Somnak',12,Role.MANAGER,Gender.MALE);
restaurant.hr.addStaff(somnak1);

/* 
    Two Accountant
*/
let theary = new Accountant('Theary',20,Role.ACCOUNTANT,Gender.FEMALE);
let Kiki = new Accountant('Kiki',20,Role.ACCOUNTANT,Gender.FEMALE);
restaurant.hr.addStaff(theary,Kiki);
/* 
    Five chefs
*/
let keai = new Chef('Kea',20,Role.CHEF,Gender.MALE);
let chan = new Chef('Chan',20,Role.CHEF,Gender.FEMALE);
let jan = new Chef('Jan',20,Role.CHEF,Gender.FEMALE);
let ronan = new Chef('Ronan',20,Role.CHEF,Gender.MALE);
let cham1 = new Chef('Cham',20,Role.CHEF,Gender.MALE);
restaurant.hr.addStaff(keai,chan,jan,ronan,cham1);
/* 
    Two security
*/
let vanda = new Security('Vanda',22,Role.SECURITY,Gender.MALE);
let sok = new Security('Sok',22,Role.SECURITY,Gender.MALE);
restaurant.hr.addStaff(vanda,sok);
/* 
    4 waiter
*/
let chanSok = new Waiter('chanSok',20,Role.WAITER,Gender.FEMALE);
let Koev = new Waiter('Koev',20,Role.WAITER,Gender.FEMALE);
let sorey = new Waiter('Sorey',20,Role.WAITER,Gender.FEMALE);
let jonh = new Waiter('Jonh',20,Role.WAITER,Gender.MALE);
restaurant.hr.addStaff(chanSok,Koev,sorey,jonh);
/* 
    Customer in Restaurant
    and Add customer to restaurant
*/
let kea = new Customer('kea',20, Gender.MALE,'123456');
let somnak = new Customer('somnak',19, Gender.MALE,'345678');
let cham = new Customer('cham',20, Gender.MALE,'55667');
let narong = new Customer('narong',20, Gender.MALE,'246675');
restaurant.hr.addCustomer(kea,somnak,cham,narong);
/* 
    food
*/
let hamburgar = new Foods(1,FoodCategory.HAMBURGAR,100);
let rice = new Foods(2,FoodCategory.RICE,200);
let dessert = new Foods(3,FoodCategory.DESSERT,300);
/* 
    drink
*/
let beer = new Drinks(1,DrinkCategory.BEER,200);
let coke = new Drinks(2,DrinkCategory.COKE,200);
let string = new Drinks(3,DrinkCategory.STRING,200);
let winner = new Drinks(4,DrinkCategory.WINER,2000);
/* 
    create menuItem
*/
let menuItem1 = new MenuItem()
let menuItem2 = new MenuItem()
/* 
    add Food or Drinks to menuItem
*/
menuItem1.addFood(hamburgar)
menuItem2.addFood(hamburgar,dessert)
menuItem2.addDrink(winner,beer)
/* 
    Create Time that Customers in Restaurant
*/
let start1 = new DateTimes('Moanday','May',2022,10);
let start2 = new DateTimes('Moanday','May',2022,9);
/* 
    Create Tables
*/
let tables1 = new Tables(1)
let tables2 = new Tables(2)
let tables3 = new Tables(3)
let tables4 = new Tables(4)
/* 
    add Table to room
*/
room1.addTableToRoom(tables1,tables2,tables3,tables4);
/* 
    add Table to Order 
*/
let order = new Orders(1,start1,tables1,menuItem1,chanSok,kea)
let order3 = new Orders(2,start1,tables2,menuItem2,Koev,kea)
let order2 = new Orders(2,start2,tables2,menuItem2,Koev,somnak)
let order4 = new Orders(2,start2,tables2,menuItem2,sorey,somnak)
/* 
    Create invoice
*/
let invoice1 = new Invoice(1)
let invoice2 = new Invoice(2)
/* 
    Create Order that 1 invoice 1 customer but has many orders
*/
invoice1.addCustomerDone(order,order3)
invoice2.addCustomerDone(order2,order4)
/* 
    Create payment 
*/
let payment1 = new Payment(kea,tables1,false)
let payment2 = new Payment(somnak,tables2,true)
/* 
  addInvoice 
*/
payment1.addInvoice(invoice1)
payment2.addInvoice(invoice2)
/* 
  checkPayment 
*/
let checkPayment = new CheckPayment();
 /* 
  add  payment1
*/
checkPayment.addPayment(payment1,payment2)
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
// console.log(checkPayment.checkFoodDrinkCustomerOrderByName(kea));




