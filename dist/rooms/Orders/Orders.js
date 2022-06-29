"use strict";
exports.__esModule = true;
exports.Orders = void 0;
var Orders = /** @class */ (function () {
    function Orders(orderID, times, tables, menuItems, customers) {
        this.orderID = orderID;
        this.times = times;
        this.tables = tables;
        this.menuItems = menuItems;
        this.customers = customers;
    }
    Orders.prototype.addTable = function (table) {
        this.tables = table;
    };
    Orders.prototype.setTimes = function (time) {
        this.times = time;
    };
    Orders.prototype.addCustomer = function (customer) {
        this.customers = customer;
    };
    Orders.prototype.getOrderID = function () {
        return this.orderID;
    };
    return Orders;
}());
exports.Orders = Orders;
