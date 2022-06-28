import { Chef } from "../../human/staff/Chef";
import { Orders } from "../Orders/Orders";
import { Foods } from "./Food";

export class Kitchen{
    private chefs:Chef[] = [];
    private orders:Orders[] = [];
    private foods:Foods[] = [];
    addChefToKitchen(...chef:Chef[]){
        this.chefs = this.chefs.concat(chef);
    }
    addOrder(...order:Orders[]){
        this.orders = this.orders.concat(order);
    }
}