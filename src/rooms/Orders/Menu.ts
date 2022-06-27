import { MenuItem, typeMenu } from "./MenuItem";
export class Menu {
 private menuItem:MenuItem[] =[];
 addMenuItem(...item:MenuItem[]){
    this.menuItem = this.menuItem.concat(item)
 }
 getAllItemInMenu(){
  for(let item of this.menuItem){
   return item
  }
 }
 inputTypeFoodsOrDrinks(items:typeMenu){
   for(let item of this.menuItem){
      let items = item as MenuItem;
    return items

    
   }
  }
}
