import { Chef } from "../../human/staff/Chef";
import { MenuItem, typeNumber } from "../Orders/MenuItem";
import { Orders } from "../Orders/Orders";
import { Drinks } from "./Drinks";
import { Foods } from "./Food";


export class Kitchen{
    private chefs:Chef[] = [];
    private orders:Orders[] = [];
    addChefToKitchen(...chef:Chef[]){
        this.chefs = this.chefs.concat(chef);
    }
    addOrder(...order:Orders[]){
        this.orders = this.orders.concat(order);
    }
}