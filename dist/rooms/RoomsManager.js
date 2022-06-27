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
    RoomsManager.prototype.checkAllRoomFreeChair = function () {
        var roomId = [];
        for (var _i = 0, _a = this.rooms; _i < _a.length; _i++) {
            var room = _a[_i];
            if (room.isFreeRoom() !== 0) {
                for (var _b = 0, _c = room['chairs']; _b < _c.length; _b++) {
                    var chair = _c[_b];
                    if (!chair.getCustomerInChair()) {
                        roomId.push(room['id']);
                    }
                }
            }
        }
        return roomId;
    };
    RoomsManager.prototype.checkFreeChair = function () {
        var chairs = [];
        for (var _i = 0, _a = this.rooms; _i < _a.length; _i++) {
            var room = _a[_i];
            if (room.isFreeRoom() !== 0) {
                for (var _b = 0, _c = room['chairs']; _b < _c.length; _b++) {
                    var chair = _c[_b];
                    if (!chair.getCustomerInChair()) {
                        chairs.push(chair);
                    }
                }
            }
        }
        return chairs;
    };
    return RoomsManager;
}());
exports.RoomsManager = RoomsManager;
