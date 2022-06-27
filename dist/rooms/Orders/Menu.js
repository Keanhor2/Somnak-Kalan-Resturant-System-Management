"use strict";
exports.__esModule = true;
exports.Menu = exports.typeMenu = void 0;
var typeMenu;
(function (typeMenu) {
    typeMenu["FOOD"] = "foods";
    typeMenu["DRINKS"] = "drinks";
})(typeMenu = exports.typeMenu || (exports.typeMenu = {}));
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
            var items_1 = item;
            return items_1;
        }
    };
    return Menu;
}());
exports.Menu = Menu;
