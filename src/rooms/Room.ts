import { Customer } from "../human/Customers/Customers";
import { Chair } from "./tables/Chairs";
import { Tables } from "./tables/Tables";

export class Room {
  
  private tables: Tables;
  private chairs:Chair[] = [];
  private customers:Customer[] = [];
  constructor(private id: number) {}
  addTable(table: Tables){
    this.tables = table;
  }
  addChair(...chairs: Chair[]){
    this.chairs = this.chairs.concat(chairs);
  }
  addCustomerToRoom(...customer: Customer[]){
    this.customers=this.customers.concat(customer);
  }
  getRoomId():number{
    return this.id;
  }
  isFreeRoom(){
    return this.customers.length
  }
 
}
