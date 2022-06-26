"use strict";
exports.__esModule = true;
exports.HumanManager = void 0;
var HumanManager = /** @class */ (function () {
    function HumanManager() {
        this.customers = [];
        this.staff = [];
    }
    /**
     * add new customers
     */
    HumanManager.prototype.addCustomer = function () {
        var newCustomer = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newCustomer[_i] = arguments[_i];
        }
        this.customers = this.customers.concat(newCustomer);
    };
    /**
     * get all customers
     */
    HumanManager.prototype.getCustomer = function () {
        return this.customers;
    };
    /**
     * add new staffs
     */
    HumanManager.prototype.addStaff = function () {
        var newStaff = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newStaff[_i] = arguments[_i];
        }
        this.staff = this.staff.concat(newStaff);
    };
    /**
     * Get all staffs
     */
    HumanManager.prototype.getStaff = function () {
        return this.staff;
    };
    return HumanManager;
}());
exports.HumanManager = HumanManager;
