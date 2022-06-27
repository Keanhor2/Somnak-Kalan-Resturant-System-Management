import { Chef } from "../../human/staff/Cheif";
import { Foods } from "./Food";

export class Kitchen{
    private chefs:Chef[] = [];
    private foods:Foods[] = [];
    addChefToKitchen(...chef:Chef[]){
        this.chefs = this.chefs.concat(chef);
    }
}