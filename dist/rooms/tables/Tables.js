"use strict";
exports.__esModule = true;
exports.Tables = void 0;
var Tables = /** @class */ (function () {
    function Tables() {
    }
    Tables.prototype.addMenuToTable = function (menu) {
        this.menus = menu;
    };
    Tables.prototype.getTable = function () {
        return this.menus;
    };
    return Tables;
}());
exports.Tables = Tables;