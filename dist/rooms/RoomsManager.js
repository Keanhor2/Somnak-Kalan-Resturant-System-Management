"use strict";
exports.__esModule = true;
exports.RoomsManager = void 0;
var RoomsManager = /** @class */ (function () {
    function RoomsManager() {
        this.rooms = [];
    }
    RoomsManager.prototype.addRoom = function (room) {
        return this.rooms.push(room);
    };
    RoomsManager.prototype.listRoomInRestart = function () {
        var roomInRestaurant = [];
        for (var _i = 0, _a = this.rooms; _i < _a.length; _i++) {
            var room = _a[_i];
            roomInRestaurant.push(room);
        }
        return roomInRestaurant;
    };
    RoomsManager.prototype.findRoomByRoomId = function (roomId) {
        for (var _i = 0, _a = this.rooms; _i < _a.length; _i++) {
            var room = _a[_i];
            if (room.getRoomId() === roomId.getRoomId()) {
                return room;
            }
        }
    };
    return RoomsManager;
}());
exports.RoomsManager = RoomsManager;
