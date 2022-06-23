"use strict";
exports.__esModule = true;
exports.HumanManager = void 0;
var Staff_1 = require("./staff/Staff");
var HumanManager = /** @class */ (function () {
    function HumanManager() {
        this.patients = [];
        this.staffs = [];
    }
    HumanManager.prototype.adddPatient = function (patient) {
        this.patients.push(patient);
    };
    HumanManager.prototype.getdPatients = function () {
        return this.patients;
    };
    HumanManager.prototype.addStaff = function (staff) {
        this.staffs.push(staff);
    };
    HumanManager.prototype.getStaffs = function () {
        return this.staffs;
    };
    /**
     *
     * @returns the first doctor found among the staff, having the given disease as speciality
     */
    HumanManager.prototype.getADoctorWithSkill = function () {
        var result;
        for (var _i = 0, _a = this.staffs; _i < _a.length; _i++) {
            var staff = _a[_i];
            var doctor = staff;
            if (doctor['category'] === Staff_1.StaffCategory.DOCTOR) {
                if (doctor.hasSpeciality()) {
                    for (var _b = 0, _c = this.patients; _b < _c.length; _b++) {
                        var patient = _c[_b];
                        for (var _d = 0, _e = patient['diseases']; _d < _e.length; _d++) {
                            var disease = _e[_d];
                            if (doctor.getSpeciality() === disease) {
                                result = doctor;
                            }
                        }
                    }
                }
            }
        }
        return result;
    };
    return HumanManager;
}());
exports.HumanManager = HumanManager;
