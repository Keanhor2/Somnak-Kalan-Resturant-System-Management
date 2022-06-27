"use strict";
exports.__esModule = true;
exports.MenuItem = void 0;
var MenuItem = /** @class */ (function () {
    function MenuItem() {
        this.foods = [];
        this.drinks = [];
    }
    MenuItem.prototype.addFood = function () {
        var food = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            food[_i] = arguments[_i];
        }
        this.foods = this.foods.concat(food);
    };
    MenuItem.prototype.addDrink = function () {
        var drink = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            drink[_i] = arguments[_i];
        }
        this.drinks = this.drinks.concat(drink);
    };
    return MenuItem;
}());
exports.MenuItem = MenuItem;
