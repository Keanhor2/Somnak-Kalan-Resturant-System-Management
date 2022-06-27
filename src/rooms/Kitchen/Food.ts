
import { Orders } from "../Orders/Orders";
import { FoodCategory } from "./EnumFood";


export class Foods {
    constructor(private foodId:number,private food:FoodCategory,private price:number) {}
}