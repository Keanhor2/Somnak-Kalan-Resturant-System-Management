import { Customer } from "./human/Customers/Customers";
import { Gender } from "./human/Person";
import { Accountant } from "./human/staff/Accountant";
import { Cheif } from "./human/staff/Cheif";
import { Manager } from "./human/staff/Manager";
import { Security } from "./human/staff/Security";
import { Role, Salary } from "./human/staff/Staff";
import { Waiter } from "./human/staff/Waiter";
import { Resturant } from "./Rataurant";

let resturant = new Resturant('SK RESTAURANT','PHNOM PENH');

// add staffs
// add a Manager
let somnak = new Manager('Somnak',12,Role.MANAGER,Gender.MALE,Salary.MANAGER_SALARY);

// add two accountants
let theary = new Accountant('Theary',20,Role.ACCOUNTANT,Gender.FEMALE,Salary.ACCOUNTANT_SALARY);
let nana = new Accountant('Nana',20,Role.ACCOUNTANT,Gender.FEMALE,Salary.ACCOUNTANT_SALARY);

// add 5 cheifs
let kea = new Cheif('Kea',20,Role.CHEIF,Gender.MALE,Salary.CHEIF_SALARY);
let chan = new Cheif('Chan',20,Role.CHEIF,Gender.FEMALE,Salary.CHEIF_SALARY);
let jan = new Cheif('Jan',20,Role.CHEIF,Gender.FEMALE,Salary.CHEIF_SALARY);
let ronan = new Cheif('Ronan',20,Role.CHEIF,Gender.MALE,Salary.CHEIF_SALARY);
let cham = new Cheif('Cham',20,Role.CHEIF,Gender.MALE,Salary.CHEIF_SALARY);

// add two security
let vanda = new Security('Vanda',22,Role.SECURITY,Gender.MALE,Salary.SECURITY_SALARY);

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
resturant.hr.addStaff(somnak,theary,nana,kea,vanda,kana,jock,sorey,jonh,chakrya,chet,jav,virak,son,kan);

// add customers 
let kaka = new Customer('Kaka',22,Gender.FEMALE,'09640500');
let kiki = new Customer('Kiki',22,Gender.FEMALE,'097444434');
let kham = new Customer('Kham',22,Gender.MALE,'0124893343');
resturant.hr.addCustomer(kaka,kiki,kham);

console.log(resturant.hr);