"use strict";
exports.__esModule = true;
exports.Room = void 0;
var Room = /** @class */ (function () {
    function Room(id) {
        this.id = id;
        this.chairs = [];
        this.customers = [];
    }
    Room.prototype.addTable = function (table) {
        this.tables = table;
    };
    Room.prototype.addChair = function () {
        var chairs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            chairs[_i] = arguments[_i];
        }
        this.chairs = this.chairs.concat(chairs);
    };
    Room.prototype.addCustomerToRoom = function () {
        var customer = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            customer[_i] = arguments[_i];
        }
        this.customers = this.customers.concat(customer);
    };
    Room.prototype.getRoomId = function () {
        return this.id;
    };
    return Room;
}());
exports.Room = Room;
