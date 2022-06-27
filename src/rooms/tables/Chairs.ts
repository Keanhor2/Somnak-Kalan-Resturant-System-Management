import { Customer } from "../../human/Customers/Customers";

export class Chair {

  constructor(private chair: number,private customer?:Customer) {}
  gitChair(){
    return this.chair;
  }
  getCustomerInChair(){
    return this.customer;
  }
 
 }
 