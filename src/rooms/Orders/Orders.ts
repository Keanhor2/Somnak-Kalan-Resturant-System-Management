import { DateTimes } from "../../calendar/DateTime";
import { Customer } from "../../human/Customers/Customers";
import { Tables } from "../tables/Tables";
import { MenuItem } from "./MenuItem";

export  class Orders{
    constructor(private orderID:number){}
    private times:DateTimes;
    private tables:Tables[] = [];
    private customers:Customer[] = [];
    private menuItems:MenuItem[] = [];
    addTable(...table:Tables[]){
        this.tables = this.tables.concat(table);
    }
    setTimes(time:DateTimes){
        this.times =time;
    }
    addCustomer(...customer:Customer[]){
        this.customers = this.customers.concat(customer);
    }
    addMenuItem(...items:MenuItem[]){
        this.menuItems = this.menuItems.concat(items);
    }
    getOrderID(){
        return this.orderID
    }
    getAllTAbles(){
        return this.tables;
    }
}