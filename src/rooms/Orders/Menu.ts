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
      if(item.getEnumFood()===items){
         return item[item.getEnumFood()];
      }else if( item.getEnumDrink()=== items){
         return item[item.getEnumDrink()];
      }
   }
  }
}
