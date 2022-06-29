"use strict";
exports.__esModule = true;
exports.Orders = void 0;
var Orders = /** @class */ (function () {
    function Orders(orderID) {
        this.orderID = orderID;
        this.tables = [];
        this.customers = [];
        this.menuItems = [];
    }
    Orders.prototype.addTable = function () {
        var table = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            table[_i] = arguments[_i];
        }
        this.tables = this.tables.concat(table);
    };
    Orders.prototype.setTimes = function (time) {
        this.times = time;
    };
    Orders.prototype.addCustomer = function () {
        var customer = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            customer[_i] = arguments[_i];
        }
        this.customers = this.customers.concat(customer);
    };
    Orders.prototype.addMenuItem = function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        this.menuItems = this.menuItems.concat(items);
    };
    Orders.prototype.getOrderID = function () {
        return this.orderID;
    };
    return Orders;
}());
exports.Orders = Orders;
