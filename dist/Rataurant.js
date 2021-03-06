"use strict";
exports.__esModule = true;
exports.Restaurant = void 0;
var RoomsManager_1 = require("./rooms/RoomsManager");
var HumanManager_1 = require("./human/HumanManager");
var Restaurant = /** @class */ (function () {
    function Restaurant(name, address) {
        // public services
        this.rooms = new RoomsManager_1.RoomsManager();
        this.hr = new HumanManager_1.HumanManager();
        this.name = name;
        this.address = address;
    }
    return Restaurant;
}());
exports.Restaurant = Restaurant;
