import { DateTimes } from "../../calendar/DateTime";
import { Customer } from "../../human/Customers/Customers";
import { Tables } from "../tables/Tables";
import { MenuItem } from "./MenuItem";
export  class Orders{
    
    constructor(private orderID:number, private times:DateTimes,private tables:Tables,private menuItems:MenuItem, private customers:Customer) {}
    addTable(table:Tables){
        this.tables= table;
    }
    setTimes(time:DateTimes){
        this.times =time;
    }
    addCustomer(customer:Customer){
        this.customers = customer;
    }
    getOrderID(){
        return this.orderID
    }
}