"use strict";
exports.__esModule = true;
exports.RoomsManager = void 0;
var RoomsManager = /** @class */ (function () {
    function RoomsManager() {
        this.rooms = [];
    }
    RoomsManager.prototype.addRoom = function () {
        var room = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            room[_i] = arguments[_i];
        }
        this.rooms = this.rooms.concat(room);
    };
    RoomsManager.prototype.countRoomInrestaurant = function () {
        return this.rooms.length;
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
    RoomsManager.prototype.checkRoomNotHaveTable = function () {
        var roomID = [];
        for (var _i = 0, _a = this.rooms; _i < _a.length; _i++) {
            var room = _a[_i];
            if (!room.getTable()) {
                roomID.push(room['id']);
            }
        }
        return roomID;
    };
    RoomsManager.prototype.checkRoomNotHaveChair = function () {
        var roomID = [];
        for (var _i = 0, _a = this.rooms; _i < _a.length; _i++) {
            var room = _a[_i];
            if (room.getChair() == 0) {
                roomID.push(room['id']);
            }
        }
        return roomID;
    };
    return RoomsManager;
}());
exports.RoomsManager = RoomsManager;
