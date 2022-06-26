import { Customer } from "./human/Customers/Customers";
import { Gender } from "./human/Person";
import { Accountant } from "./human/staff/Accountant";
import { Cheif } from "./human/staff/Cheif";
import { Manager } from "./human/staff/Manager";
import { Security } from "./human/staff/Security";
import { Role } from "./human/staff/Staff";
import { Waiter } from "./human/staff/Waiter";
import { Resturant } from "./Rataurant";

let resturant = new Resturant('SK RESTAURANT','PHNOM PENH');

// add staffs
let somnak = new Manager('Somnak',12,Role.MANAGER,Gender.MALE,1000);
let Theary = new Accountant('Theary',20,Role.ACCOUNTANT,Gender.FEMALE,600);
let kea = new Cheif('Kea',20,Role.CHEIF,Gender.MALE,700);
let vanda = new Security('Vanda',22,Role.SECURITY,Gender.MALE,300);
let kana = new Waiter('Kana',20,Role.WAITER,Gender.FEMALE,250);
let jock = new Waiter('Jock',20,Role.WAITER,Gender.MALE,250);
resturant.hr.addStaff(somnak,Theary,kea,vanda,kana,jock);

// add customers
let kaka = new Customer('Kaka',22,Gender.FEMALE,'09640500');
let kiki = new Customer('Kiki',22,Gender.FEMALE,'097444434');
let kham = new Customer('Kham',22,Gender.MALE,'0124893343');
resturant.hr.addCustomer(kaka,kiki,kham);
console.log(resturant.hr);