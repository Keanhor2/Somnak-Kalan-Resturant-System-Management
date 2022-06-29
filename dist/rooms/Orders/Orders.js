"use strict";
exports.__esModule = true;
exports.Orders = void 0;
var Orders = /** @class */ (function () {
    function Orders(orderID, times, tables, menuItems, staff, customers) {
        this.orderID = orderID;
        this.times = times;
        this.tables = tables;
        this.menuItems = menuItems;
        this.staff = staff;
        this.customers = customers;
    }
    return Orders;
}());
exports.Orders = Orders;
