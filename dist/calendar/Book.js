"use strict";
exports.__esModule = true;
exports.Book = exports.BookCategory = void 0;
var BookCategory;
(function (BookCategory) {
    BookCategory["CUSTOMERBOOK"] = "Customer_book";
})(BookCategory = exports.BookCategory || (exports.BookCategory = {}));
var Book = /** @class */ (function () {
    function Book(category, start, end) {
        this.category = category;
        this.start = start;
        this.end = end;
    }
    return Book;
}());
exports.Book = Book;
