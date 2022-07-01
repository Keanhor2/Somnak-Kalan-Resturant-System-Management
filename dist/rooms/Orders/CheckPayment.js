"use strict";
exports.__esModule = true;
exports.CheckPayment = void 0;
var Invoice_1 = require("./Invoice");
var CheckPayment = /** @class */ (function () {
    function CheckPayment() {
        this.payments = [];
    }
    CheckPayment.prototype.addPayment = function () {
        var payment = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            payment[_i] = arguments[_i];
        }
        this.payments = this.payments.concat(payment);
    };
    CheckPayment.prototype.checkListCustomerHasPayAndNotPay = function (isPay) {
        for (var _i = 0, _a = this.payments; _i < _a.length; _i++) {
            var list = _a[_i];
            if (isPay === list['isPay']) {
                return list;
            }
        }
    };
    CheckPayment.prototype.checkCustomerByTime = function (time) {
        var customers = [];
        for (var _i = 0, _a = this.payments; _i < _a.length; _i++) {
            var list = _a[_i];
            for (var _b = 0, _c = list['invoices']; _b < _c.length; _b++) {
                var order = _c[_b];
                for (var _d = 0, _e = order['orders']; _d < _e.length; _d++) {
                    var times = _e[_d];
                    if (time === times[Invoice_1.OrderType.TIMES][Invoice_1.OrderType.TIME]) {
                        customers.push(times['customers']);
                    }
                }
            }
        }
        return customers;
    };
    CheckPayment.prototype.checkAmountOfCustomerByTimeAndTable = function (time, id) {
        for (var _i = 0, _a = this.payments; _i < _a.length; _i++) {
            var list = _a[_i];
            for (var _b = 0, _c = list['invoices']; _b < _c.length; _b++) {
                var order = _c[_b];
                for (var _d = 0, _e = order['orders']; _d < _e.length; _d++) {
                    var times = _e[_d];
                    if (time === times[Invoice_1.OrderType.TIMES][Invoice_1.OrderType.TIME]) {
                        if (times['tables'][Invoice_1.OrderType.TABLEID] == id) {
                            return times['customers'];
                        }
                        return 'This ' + time + ' Do not have customers on table: ' + id;
                    }
                }
            }
        }
    };
    CheckPayment.prototype.checkFoodDrinkCustomerOrderByName = function (name) {
        for (var _i = 0, _a = this.payments; _i < _a.length; _i++) {
            var list = _a[_i];
            for (var _b = 0, _c = list['invoices']; _b < _c.length; _b++) {
                var order = _c[_b];
                for (var _d = 0, _e = order['orders']; _d < _e.length; _d++) {
                    var customer = _e[_d];
                    if (customer['customers'] === name) {
                        return customer['menuItems'];
                    }
                }
            }
        }
    };
    return CheckPayment;
}());
exports.CheckPayment = CheckPayment;
