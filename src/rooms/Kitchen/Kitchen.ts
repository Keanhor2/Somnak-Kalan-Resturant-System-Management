import { Chef } from "../../human/staff/Chef";
import { Foods } from "./Food";

export class Kitchen{
    private chefs:Chef[] = [];
    private foods:Foods[] = [];
    addChefToKitchen(...chef:Chef[]){
        this.chefs = this.chefs.concat(chef);
    }
}