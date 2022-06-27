"use strict";
exports.__esModule = true;
exports.Book = exports.BookCategory = void 0;
var BookCategory;
(function (BookCategory) {
    BookCategory["CUSTOMERBOOK"] = "CUSTOMERBOOK";
})(BookCategory = exports.BookCategory || (exports.BookCategory = {}));
var Book = /** @class */ (function () {
    function Book(category, start, end, roomID) {
        this.category = category;
        this.start = start;
        this.end = end;
        this.roomID = roomID;
    }
    return Book;
}());
exports.Book = Book;
