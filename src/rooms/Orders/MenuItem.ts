import { Drinks } from "../Kitchen/Drinks";
import { Foods } from "../Kitchen/Food";
export enum typeMenu {
    FOOD='foods',
    DRINKS='drinks',
 }
export enum typeNumber{
    number1=1,
    number2=2,
    number3=3
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
    getEnumDrink(){
        return typeMenu.DRINKS;
    }
    getEnumFood(){
        return typeMenu.FOOD;
    }
   
}