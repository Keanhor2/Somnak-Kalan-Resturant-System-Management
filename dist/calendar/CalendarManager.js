"use strict";
exports.__esModule = true;
exports.CalendarManagers = void 0;
var CalendarManagers = /** @class */ (function () {
    function CalendarManagers() {
        this.books = [];
    }
    CalendarManagers.prototype.addBook = function (book) {
        this.books.push(book);
    };
    return CalendarManagers;
}());
exports.CalendarManagers = CalendarManagers;
