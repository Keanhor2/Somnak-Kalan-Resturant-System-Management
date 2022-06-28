"use strict";
exports.__esModule = true;
exports.Orders = void 0;
var Orders = /** @class */ (function () {
    function Orders(foodId, amountOrders, drinkId, amountOrdersDrink, customer, roomID) {
        this.foodId = foodId;
        this.amountOrders = amountOrders;
        this.drinkId = drinkId;
        this.amountOrdersDrink = amountOrdersDrink;
        this.customer = customer;
        this.roomID = roomID;
    }
    return Orders;
}());
exports.Orders = Orders;
