"use strict";
exports.__esModule = true;
exports.RoomsManager = void 0;
var RoomsManager = /** @class */ (function () {
    function RoomsManager() {
    }
    RoomsManager.prototype.addRoom = function (room) {
        this.rooms = room;
    };
    RoomsManager.prototype.getRoom = function () {
        return this.rooms;
    };
    return RoomsManager;
}());
exports.RoomsManager = RoomsManager;
