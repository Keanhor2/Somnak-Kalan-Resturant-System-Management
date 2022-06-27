import { Room } from "../rooms/Room";
import { Customer } from "./Customers/Customers";
import { Staff } from "./staff/Staff";
export class HumanManager {
  private customers:Customer[] = [];
  private staff:Staff[] = [];
  addCustomer(...customer:Customer[]){
    this.customers = this.customers.concat(customer);
  }
  getCustomer(){
    return this.customers
  }
  addStaff(...newStaff:Staff[]) {
    this.staff = this.staff.concat(newStaff);
  }
  getStaff(){
    return this.staff
  }
}


