
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
import { Drinks } from "./rooms/Kitchen/Drinks";
import { DrinkCategory } from "./rooms/Kitchen/EnumDrink";
import { FoodCategory } from "./rooms/Kitchen/EnumFood";
import { Foods } from "./rooms/Kitchen/Food";
import { TableID } from "./rooms/Orders/Enum";
import { Invoice } from "./rooms/Orders/Invoice";
import { MenuItem } from "./rooms/Orders/MenuItem";
import { Orders } from "./rooms/Orders/Orders";
import { Room, typeNumber } from "./rooms/Room";
import { Tables } from "./rooms/tables/Tables";
/* 
    Room Management
*/
//Room eating //
let room1 = new Room(1);
//Add room to Restaurant
let restaurant = new Restaurant('PNC Restuarant','Phnom Penh');
restaurant.rooms.addRoom(room1);

// create customer and add to room and CustomerOrder room
let kea = new Customer('kea',20, Gender.MALE,'123456');
let somnak = new Customer('somnak',19, Gender.MALE,'345678');
let cham = new Customer('cham',20, Gender.MALE,'55667');
let narong = new Customer('narong',20, Gender.MALE,'246675');
restaurant.hr.addCustomer(kea,somnak,cham,narong);
// add a Manager
let somnak1 = new Manager('Somnak',12,Role.MANAGER,Gender.MALE);
restaurant.hr.addStaff(somnak1);

// add two accountants
let theary = new Accountant('Theary',20,Role.ACCOUNTANT,Gender.FEMALE);
let nana = new Accountant('Nana',20,Role.ACCOUNTANT,Gender.FEMALE);
restaurant.hr.addStaff(theary,nana);
// add 5 cheifs
let keai = new Chef('Kea',20,Role.CHEF,Gender.MALE);
let chan = new Chef('Chan',20,Role.CHEF,Gender.FEMALE);
let jan = new Chef('Jan',20,Role.CHEF,Gender.FEMALE);
let ronan = new Chef('Ronan',20,Role.CHEF,Gender.MALE);
let cham1 = new Chef('Cham',20,Role.CHEF,Gender.MALE);
restaurant.hr.addStaff(keai,chan,jan,ronan,cham1);
// add two security
let vanda = new Security('Vanda',22,Role.SECURITY,Gender.MALE);
let sok = new Security('Sok',22,Role.SECURITY,Gender.MALE);
restaurant.hr.addStaff(vanda,sok);
// add 20 waiter-
let kana = new Waiter('Kana',20,Role.WAITER,Gender.FEMALE);
let jock = new Waiter('Jock',20,Role.WAITER,Gender.MALE);
let sorey = new Waiter('Sorey',20,Role.WAITER,Gender.FEMALE);
let jonh = new Waiter('Jonh',20,Role.WAITER,Gender.MALE);
let chakrya = new Waiter('Chakrya',20,Role.WAITER,Gender.FEMALE);
let chet = new Waiter('Chet',20,Role.WAITER,Gender.MALE);
let jav = new Waiter('Jav',20,Role.WAITER,Gender.MALE);
let virak = new Waiter('Virak',20,Role.WAITER,Gender.MALE);
let son = new Waiter('Son',20,Role.WAITER,Gender.FEMALE);
let kan = new Waiter('Kan',20,Role.WAITER,Gender.MALE);
restaurant.hr.addStaff(kana,jock,sorey,jonh,chakrya,chet,jav,virak,son,kan);
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
let menuItem1 = new MenuItem()
let menuItem2 = new MenuItem()
menuItem1.addFood(hamburgar)
menuItem2.addDrink(winner,beer)
//create date  time start and end Order ROOMS
let start1 = new DateTimes('Moanday','May',2022,10);
let start2 = new DateTimes('Moanday','May',2022,9);
//create Tables and add to room
let tables1 = new Tables(1)
let tables2 = new Tables(2)
let tables3 = new Tables(3)
let tables4 = new Tables(4)
room1.addTableToRoom(tables1,tables2,tables3,tables4);
/* 
    add Table to Order 
*/
let order = new Orders(1,start1,tables1,menuItem1,kea)



let invoice = new Invoice()
invoice.addCustomerDone(order)
console.log(invoice.getInvoicesBy(kea));
//MAIN MENU



