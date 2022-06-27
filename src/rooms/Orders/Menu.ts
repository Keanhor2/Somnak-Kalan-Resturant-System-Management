import { MenuItem } from "./MenuItem";
export class Menu {
 private menuItem:MenuItem[] =[];
 addMenuItem(...item:MenuItem[]){
    this.menuItem = this.menuItem.concat(item)
 }
}
