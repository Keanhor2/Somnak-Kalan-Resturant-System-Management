"use strict";
exports.__esModule = true;
exports.HumanManager = void 0;
var HumanManager = /** @class */ (function () {
    function HumanManager() {
        this.customers = [];
        this.staff = [];
    }
    HumanManager.prototype.addCustomer = function () {
        var customer = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            customer[_i] = arguments[_i];
        }
        this.customers = this.customers.concat(customer);
    };
    return HumanManager;
}());
exports.HumanManager = HumanManager;
