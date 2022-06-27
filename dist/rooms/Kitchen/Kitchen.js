"use strict";
exports.__esModule = true;
exports.Kitchen = void 0;
var Kitchen = /** @class */ (function () {
    function Kitchen() {
        this.chefs = [];
        this.foods = [];
    }
    Kitchen.prototype.addChefToKitchen = function () {
        var chef = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            chef[_i] = arguments[_i];
        }
        this.chefs = this.chefs.concat(chef);
    };
    return Kitchen;
}());
exports.Kitchen = Kitchen;
