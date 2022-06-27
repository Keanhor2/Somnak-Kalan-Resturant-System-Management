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
exports.Staff = exports.Salary = exports.Role = void 0;
var Person_1 = require("../Person");
var Role;
(function (Role) {
    Role["CHEIF"] = "CHEIF";
    Role["WAITER"] = "WAITER";
    Role["SECURITY"] = "SECURITY";
    Role["MANAGER"] = "MANAGER";
    Role["ACCOUNTANT"] = "ACCOUNTANT";
})(Role = exports.Role || (exports.Role = {}));
var Salary;
(function (Salary) {
    Salary[Salary["CHEIF_SALARY"] = 700] = "CHEIF_SALARY";
    Salary[Salary["ACCOUNTANT_SALARY"] = 800] = "ACCOUNTANT_SALARY";
    Salary[Salary["SECURITY_SALARY"] = 500] = "SECURITY_SALARY";
    Salary[Salary["WAITER_SALARY"] = 300] = "WAITER_SALARY";
    Salary[Salary["MANAGER_SALARY"] = 1000] = "MANAGER_SALARY";
})(Salary = exports.Salary || (exports.Salary = {}));
/**
 * A staff is a personn of the hospital with a salary
 */
var Staff = /** @class */ (function (_super) {
    __extends(Staff, _super);
    function Staff(name, age, category, gender, salary, phone) {
        var _this = _super.call(this, name, age, gender, phone) || this;
        _this.name = name;
        _this.age = age;
        _this.category = category;
        _this.gender = gender;
        _this.salary = salary;
        _this.phone = phone;
        return _this;
    }
    return Staff;
}(Person_1.Person));
exports.Staff = Staff;
