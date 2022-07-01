import { DrinkCategory } from "./EnumDrink";

export class Drinks {
    constructor(
        private drinkId: number,
        private name: DrinkCategory,
        private price: number) { }
    getDrinkID() {
        return this.drinkId;
    }
}