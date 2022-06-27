import { Orders } from "../../rooms/Orders/Orders";
import { Gender, Person } from "../Person";
export class Customer extends Person {
  private orderId: Orders[] = [];
  constructor(name: string, age: number, gender: Gender) {
    super(name, age, gender);

  }
  isTheName(){
    return this.name;
  }
}