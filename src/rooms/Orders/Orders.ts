
import { Customer } from "../../human/Customers/Customers";
import { DrinkCategory } from "../Kitchen/EnumDrink";
import { FoodCategory } from "../Kitchen/EnumFood";
import { Room } from "../Room";
import { MenuItem, typeNumber } from "./MenuItem";
export  class Orders{
    constructor(
    private foodId:typeNumber,
    private amountOrders:number,
    private drinkId:typeNumber,
    private amountOrdersDrink:number,
    private customer:Customer,
    private roomID:Room
    ) {}
}