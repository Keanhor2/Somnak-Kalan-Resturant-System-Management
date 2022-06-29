import { Drinks } from "../stock/Drinks";
import { Foods } from "../stock/Food";
export enum typeMenu {
    FOOD='foods',
    DRINKS='drinks',
 }
export class MenuItem {
    private foods:Foods[]=[];
    private drinks:Drinks[]= [];
    addFood(...food:Foods[]){
        this.foods = this.foods.concat(food);
    }
    addDrink(...drink:Drinks[]){
        this.drinks= this.drinks.concat(drink);
    }
}