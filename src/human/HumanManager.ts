import { Room } from "../rooms/Room";
import { Customer } from "./Customers/Customers";
import { Role, Staff } from "./staff/Staff";
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
  countAllStaffInRestaurants(){
    return this.staff.length
  }
  getAmountOfCustomerDay(){
    return this.customers.length
  }
  /*
  *All spend in a Month for staff members
  */
  getRestaurantsSpeedInMonth(){
    let result:number=0;
    for(let amount of this.staff){
      result+=amount['salary'];
    }
    return result;
  }
}


