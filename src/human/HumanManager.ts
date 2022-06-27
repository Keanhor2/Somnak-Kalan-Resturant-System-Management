import { Room } from "../rooms/Room";
import { Customer } from "./Customers/Customers";
import { Staff } from "./staff/Staff";
export class HumanManager {
  private customers:Customer[] = [];
  private staff:Staff[] = [];
  addCustomer(...customer:Customer[]){
    this.customers = this.customers.concat(customer);
  }
}
