"use strict";
exports.__esModule = true;
exports.Resturant = void 0;
var RoomsManager_1 = require("./rooms/RoomsManager");
var HumanManager_1 = require("./human/HumanManager");
var CalendarManager_1 = require("./calendar/CalendarManager");
var Resturant = /** @class */ (function () {
    function Resturant(name, address) {
        // public services
        this.calendar = new CalendarManager_1.CalendarManager();
        this.rooms = new RoomsManager_1.RoomsManager();
        this.hr = new HumanManager_1.HumanManager();
        this.name = name;
        this.address = address;
    }
    return Resturant;
}());
exports.Resturant = Resturant;
