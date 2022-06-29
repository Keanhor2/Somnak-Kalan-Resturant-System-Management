"use strict";
exports.__esModule = true;
exports.Room = void 0;
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
