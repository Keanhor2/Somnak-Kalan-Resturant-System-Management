"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.CustomerBook = exports.roomID = void 0;
var Book_1 = require("./Book");
var roomID;
(function (roomID) {
    roomID["roomID"] = "roomID";
})(roomID = exports.roomID || (exports.roomID = {}));
var CustomerBook = /** @class */ (function (_super) {
    __extends(CustomerBook, _super);
    function CustomerBook(category, start, end, roomID, customer) {
        var _this = _super.call(this, category, start, end, roomID) || this;
        _this.customer = customer;
        return _this;
    }
    return CustomerBook;
}(Book_1.Book));
exports.CustomerBook = CustomerBook;
