import { Waiter } from "../../human/staff/Waiter";
import { MenuItem } from "./MenuItem";

export  class Orders{
    private menuItems: MenuItem[] = [];
    constructor(private amount:number) { }
}