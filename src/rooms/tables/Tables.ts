
import { Menu } from "../Orders/Menu";
import { Chair } from "./Chairs";

export class Tables {
 private menus: Menu;
 addMenuToTable(menu:Menu){
    this.menus = menu
 }
}
