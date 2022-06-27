"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Chef = void 0;
var Staff_1 = require("./Staff");
/**
 * A nurse manage patient checks
 */
<<<<<<< HEAD
var Cheif = /** @class */ (function (_super) {
    __extends(Cheif, _super);
    function Cheif(name, age, category, gender, salary) {
        return _super.call(this, name, age, category, gender, salary) || this;
=======
var Chef = /** @class */ (function (_super) {
    __extends(Chef, _super);
    function Chef(name, age, category, gender, salary) {
        var _this = _super.call(this, name, age, category, gender, salary) || this;
        _this.salary = salary;
        return _this;
>>>>>>> 4c8782a4b4d30fca48974c3f15db90c7675fe06c
    }
    return Chef;
}(Staff_1.Staff));
exports.Chef = Chef;
