"use strict";
exports.__esModule = true;
exports.Menu = void 0;
var Menu = /** @class */ (function () {
    function Menu() {
        this.menuItem = [];
        // getDrink() {
        //    for (let drinks of this.drinks) {
        //       if (drinks.getDrinkID()) {
        //          return drinks
        //       }
        //    }
        // }
    }
    Menu.prototype.addMenuItem = function () {
        var item = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            item[_i] = arguments[_i];
        }
        this.menuItem = this.menuItem.concat(item);
    };
    Menu.prototype.getAllItemInMenu = function () {
        for (var _i = 0, _a = this.menuItem; _i < _a.length; _i++) {
            var item = _a[_i];
            return item;
        }
    };
    Menu.prototype.inputTypeFoodsOrDrinks = function (items) {
        for (var _i = 0, _a = this.menuItem; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.getEnumFood() === items) {
                return item[item.getEnumFood()];
            }
            else if (item.getEnumDrink() === items) {
                return item[item.getEnumDrink()];
            }
        }
    };
    /* List name of food that customer order by foodId*/
    Menu.prototype.getFood = function (num) {
        for (var _i = 0, _a = this.menuItem; _i < _a.length; _i++) {
            var foodID = _a[_i];
            for (var _b = 0, _c = foodID['foods']; _b < _c.length; _b++) {
                var item = _c[_b];
                if (item.getFoodId() === num) {
                    return item;
                }
            }
        }
    };
    return Menu;
}());
exports.Menu = Menu;
