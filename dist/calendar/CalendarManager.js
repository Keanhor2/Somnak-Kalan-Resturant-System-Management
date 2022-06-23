"use strict";
exports.__esModule = true;
exports.CalendarManager = void 0;
var Staff_1 = require("../human/staff/Staff");
var CalendarManager = /** @class */ (function () {
    function CalendarManager() {
        this.events = [];
    }
    CalendarManager.prototype.addEvent = function (event) {
        this.events.push(event);
    };
    /**
     * @returns all appointement for the given doctor
     */
    CalendarManager.prototype.getAllAppointementFor = function (doctor) {
        if (doctor['category'] == Staff_1.StaffCategory.DOCTOR) {
            return this.events;
        }
    };
    /**
     *
     * @returns true if the doctor is free at given date (no appointement) - false otherwise
     */
    CalendarManager.prototype.isDoctorFree = function (date) {
        return false; //TODO
    };
    return CalendarManager;
}());
exports.CalendarManager = CalendarManager;
