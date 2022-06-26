import { MenuItem } from "../Orders/MenuItem";
import { Orders } from "../Orders/Orders";

export abstract class Cook{
    constructor(private orderId:Orders){}
}