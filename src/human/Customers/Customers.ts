
import { Orders } from "../../rooms/Orders/Orders";
import { Gender, Person } from "../Person";
export class Customer extends Person {
  private order:Orders[] = [];
  constructor(name: string, age: number, gender: Gender,phone: string) {
    super(name, age, gender,phone);
  }
  isTheName(){
    return this.name;
  }
  getCustomer(){
    return this.name;
  }
  addOrder(orders:Orders[]){
    this.order = this.order.concat(orders)
  }
}