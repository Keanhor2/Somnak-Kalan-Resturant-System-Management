"use strict";
exports.__esModule = true;
exports.Invoice = void 0;
var OrderType;
(function (OrderType) {
    OrderType["TABLE"] = "tables";
    OrderType["TABLEID"] = "tableID";
    OrderType["TIMES"] = "times";
    OrderType["TIME"] = "time";
    OrderType["DAY"] = "day";
    OrderType["MONTH"] = "month";
    OrderType["YEAR"] = "year";
    OrderType["FOOD"] = "foods";
    OrderType["DRINK"] = "drinks";
    OrderType["PRICE"] = "price";
    OrderType["ORDERID"] = "orderID";
    OrderType["NAME"] = "name";
})(OrderType || (OrderType = {}));
var Invoice = /** @class */ (function () {
    function Invoice() {
        this.orders = [];
    }
    Invoice.prototype.addCustomerDone = function () {
        var order = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            order[_i] = arguments[_i];
        }
        this.orders = this.orders.concat(order);
    };
    Invoice.prototype.getInvoicesBy = function (name) {
        var date = '';
        var times = '';
        var orderIdAndTableId = '';
        var foods = '';
        var drinks = '';
        var total = 0;
        for (var _i = 0, _a = this.orders; _i < _a.length; _i++) {
            var invoice = _a[_i];
            if (invoice['customers'] === name) {
                date = invoice[OrderType.TIMES][OrderType.DAY] + '-' + invoice[OrderType.TIMES][OrderType.MONTH] + '-' + invoice[OrderType.TIMES][OrderType.YEAR];
                orderIdAndTableId = 'OrderId :' + invoice[OrderType.ORDERID] + '  ' + 'tableId :' + invoice[OrderType.TABLE][OrderType.TABLEID];
                times = "Eat In " + "  " + invoice[OrderType.TIMES][OrderType.TIME] + " am";
                for (var _b = 0, _c = invoice['menuItems'][OrderType.FOOD]; _b < _c.length; _b++) {
                    var food = _c[_b];
                    foods += food[OrderType.NAME] + ' - ' + food[OrderType.PRICE] + '\n';
                    total += food[OrderType.PRICE];
                }
                for (var _d = 0, _e = invoice['menuItems'][OrderType.DRINK]; _d < _e.length; _d++) {
                    var drink = _e[_d];
                    drinks += drink[OrderType.NAME] + ' - ' + drink[OrderType.PRICE] + '\n';
                    total += drink[OrderType.PRICE];
                }
            }
        }
        return 'Entry: ' + date + '\n'
            + 'Date: ' + times + '\n'
            + 'ORD-TBL: ' + orderIdAndTableId + '\n'
            + 'Foods: ' + foods + '\n'
            + 'Drinks: ' + drinks + '\n'
            + 'Total: ' + total;
    };
    Invoice.prototype.checkCustomerByTime = function (time) {
        for (var _i = 0, _a = this.orders; _i < _a.length; _i++) {
            var check = _a[_i];
            if (check[OrderType.TIMES][OrderType.TIME] == time) {
                return check;
            }
        }
    };
    Invoice.prototype.checkAmountOfCustomerByTimeAndTable = function (time, id) {
        for (var _i = 0, _a = this.orders; _i < _a.length; _i++) {
            var check = _a[_i];
            if (check[OrderType.TIMES][OrderType.TIME] == time) {
                if (check[OrderType.TABLE][OrderType.TABLEID] == id) {
                    return check;
                }
                return 'This ' + time + ' time does not exist tableId: ' + id;
            }
        }
    };
    Invoice.prototype.checkFoodDrinkCustomerOrderByName = function (name) {
        for (var _i = 0, _a = this.orders; _i < _a.length; _i++) {
            var check = _a[_i];
            if (check['customers'] === name) {
                // for (let food of check['menuItems'][OrderType.FOOD]) {
                //   return food
                // }
                // for (let drink of check['menuItems'][OrderType.DRINK]) {
                //    return drink
                // }
                return check['menuItems'];
            }
        }
    };
    return Invoice;
}());
exports.Invoice = Invoice;
