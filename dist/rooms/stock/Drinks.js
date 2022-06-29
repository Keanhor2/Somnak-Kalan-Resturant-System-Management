"use strict";
exports.__esModule = true;
exports.Drinks = void 0;
var Drinks = /** @class */ (function () {
    function Drinks(drinkId, name, price) {
        this.drinkId = drinkId;
        this.name = name;
        this.price = price;
    }
    Drinks.prototype.getDrinkID = function () {
        return this.drinkId;
    };
    return Drinks;
}());
exports.Drinks = Drinks;
