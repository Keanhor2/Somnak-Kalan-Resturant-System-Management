import { Waiter } from "../../human/staff/Waiter";
import { MenuItem } from "./MenuItem";

export  class Orders{
    private waiter:Waiter;
    private menuItems: MenuItem[] = [];
}