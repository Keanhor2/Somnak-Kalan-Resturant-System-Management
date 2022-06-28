
import { Customer } from "../../human/Customers/Customers";
import { DrinkCategory } from "../Kitchen/EnumDrink";
import { FoodCategory } from "../Kitchen/EnumFood";
export  class Orders{
    constructor(
    private food:FoodCategory,
    private amountOrders:number,
    private drink:DrinkCategory,
    private amountOrdersDrink:number,
    private customer:Customer
    ) {}
}