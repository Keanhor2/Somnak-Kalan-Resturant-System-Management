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
    return Menu;
}());
exports.Menu = Menu;
