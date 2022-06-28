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
    HumanManager.prototype.countAllStaffInRestaurants = function () {
        return this.staff.length;
    };
    HumanManager.prototype.getAmountOfCustomerDay = function () {
        return this.customers.length;
    };
    /*
    *All spend in a Month for staff members
    */
    HumanManager.prototype.getRestaurantsSpeedInMonth = function () {
        var result = 0;
        for (var _i = 0, _a = this.staff; _i < _a.length; _i++) {
            var amount = _a[_i];
            result += amount['salary'];
        }
        return result;
    };
    return HumanManager;
}());
exports.HumanManager = HumanManager;
