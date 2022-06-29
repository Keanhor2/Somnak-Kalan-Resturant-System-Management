import { DateTimes } from "../../calendar/DateTime";
import { Customer } from "../../human/Customers/Customers";
import { Staff } from "../../human/staff/Staff";
import { Tables } from "../tables/Tables";
import { MenuItem } from "./MenuItem";
export  class Orders{
    constructor(
        private orderID:number, 
        private times:DateTimes,
        private tables:Tables,
        private menuItems:MenuItem,
        private staff:Staff ,
        private customers:Customer
        ) {}
}