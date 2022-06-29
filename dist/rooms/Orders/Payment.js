"use strict";
exports.__esModule = true;
exports.Payment = void 0;
var Payment = /** @class */ (function () {
    function Payment(custumers, tableId, isPay) {
        this.custumers = custumers;
        this.tableId = tableId;
        this.isPay = isPay;
        this.invoices = [];
    }
    Payment.prototype.addInvoice = function () {
        var invoice = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            invoice[_i] = arguments[_i];
        }
        this.invoices = this.invoices.concat(invoice);
    };
    Payment.prototype.isPayAlready = function (customer, id) {
        if (customer == this.custumers && id == this.tableId) {
            if (this.isPay == true) {
                return this.isPay;
            }
            else {
                return this.isPay;
            }
        }
    };
    return Payment;
}());
exports.Payment = Payment;
