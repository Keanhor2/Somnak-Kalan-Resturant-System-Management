"use strict";
exports.__esModule = true;
exports.MenuItem = exports.typeNumber = exports.typeMenu = void 0;
var typeMenu;
(function (typeMenu) {
    typeMenu["FOOD"] = "foods";
    typeMenu["DRINKS"] = "drinks";
})(typeMenu = exports.typeMenu || (exports.typeMenu = {}));
var typeNumber;
(function (typeNumber) {
    typeNumber[typeNumber["number1"] = 1] = "number1";
    typeNumber[typeNumber["number2"] = 2] = "number2";
    typeNumber[typeNumber["number3"] = 3] = "number3";
})(typeNumber = exports.typeNumber || (exports.typeNumber = {}));
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
    MenuItem.prototype.getEnumDrink = function () {
        return typeMenu.DRINKS;
    };
    MenuItem.prototype.getEnumFood = function () {
        return typeMenu.FOOD;
    };
    return MenuItem;
}());
exports.MenuItem = MenuItem;
