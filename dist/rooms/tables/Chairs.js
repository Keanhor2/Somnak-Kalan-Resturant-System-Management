"use strict";
exports.__esModule = true;
exports.Chair = void 0;
var Chair = /** @class */ (function () {
    function Chair(chair, customer) {
        this.chair = chair;
        this.customer = customer;
    }
    Chair.prototype.gitChair = function () {
        return this.chair;
    };
    Chair.prototype.getCustomerInChair = function () {
        return this.customer;
    };
    return Chair;
}());
exports.Chair = Chair;
