import { BookCategory } from "./calendar/Book";
import { CustomerBook } from "./calendar/CustomerBook";
import { DateTimes } from "./calendar/DateTime";
import { Customer } from "./human/Customers/Customers";
import { Gender } from "./human/Person";
import { Accountant } from "./human/staff/Accountant";
import { Cheif } from "./human/staff/Cheif";
import { Manager } from "./human/staff/Manager";
import { Security } from "./human/staff/Security";
import { Role, Salary } from "./human/staff/Staff";
import { Waiter } from "./human/staff/Waiter";
import { Restaurant } from "./Rataurant";
import { Drinks } from "./rooms/Kitchen/Drinks";
import { DrinkCategory } from "./rooms/Kitchen/EnumDrink";
import { FoodCategory } from "./rooms/Kitchen/EnumFood";
import { Foods } from "./rooms/Kitchen/Food";
import { Kitchen } from "./rooms/Kitchen/Kitchen";
import { Menu } from "./rooms/Orders/Menu";
import { MenuItem, typeMenu } from "./rooms/Orders/MenuItem";
import { Room } from "./rooms/Room";
import { Chair } from "./rooms/tables/Chairs";
import { Tables } from "./rooms/tables/Tables";
/* 
    Room Management
*/
//Room eating //
let room1 = new Room(1);
let room2 = new Room(2);
let room3 = new Room(3);
let room4 = new Room(4);
let room5 = new Room(5);
let room6 = new Room(6);
let room7 = new Room(7);
let room8 = new Room(8);
let room9 = new Room(9);
let room10 = new Room(10);
//Add room to Restaurant
let restaurant = new Restaurant('PNC Restuarant','Phnom Penh');
restaurant.rooms.addRoom(room1,room2,room3,room4,room5,room6,room7,room8,room9,room10);
//create Tables and add to room
let tables = new Tables()
room1.addTable(tables);
room2.addTable(tables);
room3.addTable(tables);
// create customer and add to room and CustomerOrder room
let kea1 = new Customer('kea',20, Gender.MALE,'123456');
let somnak2 = new Customer('somnak',19, Gender.MALE,'345678');
let cham2 = new Customer('cham',20, Gender.MALE,'55667');
let narong = new Customer('narong',20, Gender.MALE,'246675');
restaurant.hr.addCustomer(kea1,somnak2,cham2,narong);
//create chair and add to room
let char1 = new Chair(1,kea1)
let char2 = new Chair(2,somnak2)
let char3 = new Chair(3,cham2)
let char4 = new Chair(4)
let char5 = new Chair(5,narong)
room1.addChair(char1,char2,char3,char4,char5);
room2.addChair(char4,char5);
//add customers to room
room1.addCustomerToRoom(kea1,somnak2,narong,cham2)
room2.addCustomerToRoom(kea1,somnak2,narong,cham2)
//create date  time start and end Order ROOMS
let start1 = new DateTimes('Moanday','May',2022,10);
let end1 = new DateTimes('Moanday','May',2022,10);
///
// put in CustomerBook and add to Calendar
// add room that customer book
// add Customer's name book
let bookTable = new CustomerBook(BookCategory.CUSTOMERBOOK,start1,end1,room1,kea1);
let bookTable1 = new CustomerBook(BookCategory.CUSTOMERBOOK,start1,end1,room2,somnak2);
let bookTable2 = new CustomerBook(BookCategory.CUSTOMERBOOK,start1,end1,room2,cham2);
restaurant.calendar.addBook(bookTable,bookTable1);

// add staffs
// add a Manager
let somnak = new Manager('Somnak',12,Role.MANAGER,Gender.MALE,Salary.MANAGER_SALARY);
restaurant.hr.addStaff(somnak);

// add two accountants
let theary = new Accountant('Theary',20,Role.ACCOUNTANT,Gender.FEMALE,Salary.ACCOUNTANT_SALARY);
let nana = new Accountant('Nana',20,Role.ACCOUNTANT,Gender.FEMALE,Salary.ACCOUNTANT_SALARY);
restaurant.hr.addStaff(theary,nana);

// add 5 cheifs
let kea = new Cheif('Kea',20,Role.CHEIF,Gender.MALE,Salary.CHEIF_SALARY);
let chan = new Cheif('Chan',20,Role.CHEIF,Gender.FEMALE,Salary.CHEIF_SALARY);
let jan = new Cheif('Jan',20,Role.CHEIF,Gender.FEMALE,Salary.CHEIF_SALARY);
let ronan = new Cheif('Ronan',20,Role.CHEIF,Gender.MALE,Salary.CHEIF_SALARY);
let cham = new Cheif('Cham',20,Role.CHEIF,Gender.MALE,Salary.CHEIF_SALARY);
restaurant.hr.addStaff(kea,chan,jan,ronan,cham);

// add two security
let vanda = new Security('Vanda',22,Role.SECURITY,Gender.MALE,Salary.SECURITY_SALARY);
let sok = new Security('Sok',22,Role.SECURITY,Gender.MALE,Salary.SECURITY_SALARY);
restaurant.hr.addStaff(vanda,sok);

// add 20 waiter-
let kana = new Waiter('Kana',20,Role.WAITER,Gender.FEMALE,Salary.WAITER_SALARY);
let jock = new Waiter('Jock',20,Role.WAITER,Gender.MALE,Salary.WAITER_SALARY);
let sorey = new Waiter('Sorey',20,Role.WAITER,Gender.FEMALE,Salary.WAITER_SALARY);
let jonh = new Waiter('Jonh',20,Role.WAITER,Gender.MALE,Salary.WAITER_SALARY);
let chakrya = new Waiter('Chakrya',20,Role.WAITER,Gender.FEMALE,Salary.WAITER_SALARY);
let chet = new Waiter('Chet',20,Role.WAITER,Gender.MALE,Salary.WAITER_SALARY);
let jav = new Waiter('Jav',20,Role.WAITER,Gender.MALE,Salary.WAITER_SALARY);
let virak = new Waiter('Virak',20,Role.WAITER,Gender.MALE,Salary.WAITER_SALARY);
let son = new Waiter('Son',20,Role.WAITER,Gender.FEMALE,Salary.WAITER_SALARY);
let kan = new Waiter('Kan',20,Role.WAITER,Gender.MALE,Salary.WAITER_SALARY);
restaurant.hr.addStaff(kana,jock,sorey,jonh,chakrya,chet,jav,virak,son,kan);

// add customers 
let kaka = new Customer('Kaka',22,Gender.FEMALE,'09640500');
let kiki = new Customer('Kiki',22,Gender.FEMALE,'097444434');
let kham = new Customer('Kham',22,Gender.MALE,'0124893343');
restaurant.hr.addCustomer(kaka,kiki,kham);



/* 
    food and drink
*/
let hamburgar = new Foods(1,FoodCategory.HAMBURGAR,100);
let rice = new Foods(2,FoodCategory.RICE,200);
let dessert = new Foods(3,FoodCategory.DESSERT,300);

let beer = new Drinks(1,DrinkCategory.BEER,200);
let coke = new Drinks(2,DrinkCategory.COKE,200);
let string = new Drinks(3,DrinkCategory.STRING,200);
let winner = new Drinks(4,DrinkCategory.WINER,2000);
/* 
    add food and drink to menuItem
*/
let menuItem = new MenuItem()
menuItem.addFood(hamburgar,rice,dessert)
menuItem.addDrink(beer,coke,string,winner)
/* 
    add menuItem to menu
*/
let menu = new Menu()
menu.addMenuItem(menuItem)

/* 
    add menu to table
*/
tables.addMenuToTable(menu)
/* 
    add chef to kitchen 
*/
let kitchens = new Kitchen()
kitchens.addChefToKitchen(kea,chan,jan,ronan,cham);
/* 
    add kitchen to restaurant
*/
restaurant.rooms.kitchen = kitchens;
//MAIN MENU

//all in restaurant
console.log(restaurant.calendar.getAllBooksByCustomer());
