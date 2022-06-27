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
    HumanManager.prototype.getCustomer = function () {
        return this.customers;
    };
    HumanManager.prototype.addStaff = function () {
        var newStaff = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newStaff[_i] = arguments[_i];
        }
        this.staff = this.staff.concat(newStaff);
    };
    HumanManager.prototype.getStaff = function () {
        return this.staff;
    };
    return HumanManager;
}());
exports.HumanManager = HumanManager;
