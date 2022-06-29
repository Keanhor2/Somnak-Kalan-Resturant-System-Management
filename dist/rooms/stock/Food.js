"use strict";
exports.__esModule = true;
exports.Foods = void 0;
var Foods = /** @class */ (function () {
    function Foods(foodId, name, price) {
        this.foodId = foodId;
        this.name = name;
        this.price = price;
    }
    Foods.prototype.getFoodId = function () {
        return this.foodId;
    };
    return Foods;
}());
exports.Foods = Foods;
