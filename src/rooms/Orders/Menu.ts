import {  MenuItem, typeMenu, typeNumber } from "./MenuItem";
export enum CategoryType {
   DRINK='drinks',
   FOOD='foods',
}
export class Menu {
   private menuItem: MenuItem[] = [];
   addMenuItem(...item: MenuItem[]) {
      this.menuItem = this.menuItem.concat(item)
   }
   getAllItemInMenu() {
      for (let item of this.menuItem) {
         return item
      }
   }
   inputTypeFoodsOrDrinks(items: typeMenu) {
      for (let item of this.menuItem) {
         if (item.getEnumFood() === items) {
            return item[item.getEnumFood()];
         } else if (item.getEnumDrink() === items) {
            return item[item.getEnumDrink()];
         }
      }
   }
   /* List name of food that customer order by foodId*/
   getFood(num:typeNumber) {
      for (let food of this.menuItem) {
        for(let item of food[CategoryType.FOOD]){
         if(item.getFoodId()===num) {
            return item
         }
        }

      }
   }
   /* List name of Drink that customer order by foodId*/
   getDrink(num:typeNumber) {
      for (let drink of this.menuItem) {
        for(let item of drink[CategoryType.DRINK]){
         if(item.getDrinkID()===num) {
            return item
         }
        }

      }
   }
}
