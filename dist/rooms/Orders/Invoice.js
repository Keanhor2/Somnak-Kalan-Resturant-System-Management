"use strict";
exports.__esModule = true;
exports.Invoice = void 0;
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
    Invoice.prototype.getInvoices = function (num) {
        var date = '';
        var times = '';
        var orderIdAndTableId = '';
        var foods = '';
        var drinks = '';
        var total = 0;
        for (var _i = 0, _a = this.orders; _i < _a.length; _i++) {
            var invoice = _a[_i];
            if (invoice['tables'][0]['tableID'] === num) {
                date = invoice['times']['day'] + '-' + invoice['times']['month'] + '-' + invoice['times']['year'];
                orderIdAndTableId = 'OrderId :' + invoice['orderID'] + '  ' + 'tableId :' + invoice['tables'][0]['tableID'];
                times = "Eat In " + "  " + invoice['times']['time'] + " am";
                for (var _b = 0, _c = invoice['menuItems']; _b < _c.length; _b++) {
                    var item = _c[_b];
                    for (var _d = 0, _e = item['foods']; _d < _e.length; _d++) {
                        var food = _e[_d];
                        foods += food['food'] + ' - ' + food['price'] + '\n';
                        total += food['price'];
                    }
                    for (var _f = 0, _g = item['drinks']; _f < _g.length; _f++) {
                        var drink = _g[_f];
                        drinks += drink['name'] + ' - ' + drink['price'] + '\n';
                        total += drink['price'];
                    }
                }
            }
        }
        return date + '\n' + times + '\n' + orderIdAndTableId + '\n' + foods + '\n' + drinks + '\n' + total;
    };
    return Invoice;
}());
exports.Invoice = Invoice;
