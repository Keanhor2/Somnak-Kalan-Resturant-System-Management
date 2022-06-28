"use strict";
exports.__esModule = true;
exports.Foods = void 0;
var Foods = /** @class */ (function () {
    function Foods(foodId, food, price) {
        this.foodId = foodId;
        this.food = food;
        this.price = price;
    }
    Foods.prototype.getFoodId = function () {
        return this.foodId;
    };
    return Foods;
}());
exports.Foods = Foods;
