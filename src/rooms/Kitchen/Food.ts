

import { FoodCategory } from "./EnumFood";


export class Foods{
    constructor(private foodId:number,private food:FoodCategory,private price:number) {}
    getFoodId(){
        return this.foodId;
    }
}
