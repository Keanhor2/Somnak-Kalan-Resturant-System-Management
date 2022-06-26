import { Customer } from "./Customers/Customers";
import { Staff } from "./staff/Staff";
export class HumanManager {
  private customers:Customer[] = [];
  private staff:Staff[] = [];

/**
 * add new customers 
 */
  addCustomer(...newCustomer:Customer[]) {
    this.customers = this.customers.concat(newCustomer);
  }

/**
 * get all customers
 */
  getCustomer(){
    return this.customers
  }

/**
 * add new staffs
 */
  addStaff(...newStaff:Staff[]) {
    this.staff = this.staff.concat(newStaff);
  }

/**
 * Get all staffs
 */
  getStaff(){
    return this.staff
  }
}


