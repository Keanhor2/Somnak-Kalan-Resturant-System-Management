"use strict";
exports.__esModule = true;
exports.Menu = void 0;
var Menu = /** @class */ (function () {
    function Menu() {
        this.menuItem = [];
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
    return Menu;
}());
exports.Menu = Menu;
