"use strict";
exports.__esModule = true;
exports.Tables = exports.TableID = void 0;
var TableID;
(function (TableID) {
    TableID[TableID["ID1"] = 1] = "ID1";
    TableID[TableID["ID2"] = 2] = "ID2";
    TableID[TableID["ID3"] = 3] = "ID3";
    TableID[TableID["ID4"] = 4] = "ID4";
})(TableID = exports.TableID || (exports.TableID = {}));
var Tables = /** @class */ (function () {
    function Tables(tableID) {
        this.tableID = tableID;
    }
    Tables.prototype.getTableID = function () {
        return this.tableID;
    };
    return Tables;
}());
exports.Tables = Tables;
