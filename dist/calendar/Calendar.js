"use strict";
exports.__esModule = true;
exports.CalendarManager = void 0;
var CalendarManager = /** @class */ (function () {
    function CalendarManager() {
        this.books = [];
    }
    CalendarManager.prototype.addEvent = function (book) {
        this.books.push(book);
    };
    return CalendarManager;
}());
exports.CalendarManager = CalendarManager;
