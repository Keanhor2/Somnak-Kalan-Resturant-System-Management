"use strict";
exports.__esModule = true;
exports.RoomsManager = void 0;
var RoomsManager = /** @class */ (function () {
    function RoomsManager() {
        this.rooms = [];
    }
    RoomsManager.prototype.getNumberOfRooms = function () {
        return this.rooms.length;
    };
    RoomsManager.prototype.addRoom = function (room) {
        return this.rooms.push(room);
    };
    return RoomsManager;
}());
exports.RoomsManager = RoomsManager;
