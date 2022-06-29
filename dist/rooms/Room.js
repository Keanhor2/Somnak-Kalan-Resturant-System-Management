"use strict";
exports.__esModule = true;
exports.Room = exports.typeNumber = void 0;
var typeNumber;
(function (typeNumber) {
    typeNumber[typeNumber["number1"] = 1] = "number1";
    typeNumber[typeNumber["number2"] = 2] = "number2";
    typeNumber[typeNumber["number3"] = 3] = "number3";
    typeNumber[typeNumber["number4"] = 4] = "number4";
    typeNumber[typeNumber["number5"] = 5] = "number5";
})(typeNumber = exports.typeNumber || (exports.typeNumber = {}));
var Room = /** @class */ (function () {
    function Room(id) {
        this.id = id;
        this.tables = [];
    }
    Room.prototype.addTableToRoom = function () {
        var table = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            table[_i] = arguments[_i];
        }
        this.tables = this.tables.concat(table);
    };
    Room.prototype.getRoomId = function () {
        return this.id;
    };
    return Room;
}());
exports.Room = Room;
