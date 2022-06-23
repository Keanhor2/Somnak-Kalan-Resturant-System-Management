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
    /** Find a room with a free bed
     * @return the first room available with a free bed
     */
    RoomsManager.prototype.findFreeRoom = function () {
        var result = undefined;
        for (var _i = 0, _a = this.rooms; _i < _a.length; _i++) {
            var room = _a[_i];
            if (room.getBeds()) {
                if (room.getNumberOfBeds() != 0) {
                    for (var _b = 0, _c = room.getBeds(); _b < _c.length; _b++) {
                        var bed = _c[_b];
                        if (!bed.hasPatient()) {
                            result = room;
                        }
                    }
                }
            }
        }
        return result;
    };
    return RoomsManager;
}());
exports.RoomsManager = RoomsManager;
