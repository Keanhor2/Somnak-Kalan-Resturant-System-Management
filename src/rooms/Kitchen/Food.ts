import { MenuItem } from "../Orders/MenuItem";
import { Orders } from "../Orders/Orders";
import { Cook } from "./Cook";
import { FoodCategory } from "./EnumFood";

export class Foods extends Cook{
    constructor(orderId:Orders) {
        super(orderId);
    }
}