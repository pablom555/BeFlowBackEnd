"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHolidayByID = exports.getHolidaysByYear = exports.getAllHolidays = exports.deleteHolidaysByYear = exports.saveHoliday = void 0;
const holidays_schema_1 = __importDefault(require("../schemas/holidays.schema"));
function saveHoliday(holidayData) {
    return __awaiter(this, void 0, void 0, function* () {
        const holiday = new holidays_schema_1.default();
        const { day, id, info, month, reason, type, year } = holidayData;
        holiday.day = day;
        holiday.id = id;
        holiday.info = info;
        holiday.month = month;
        holiday.reason = reason;
        holiday.type = type;
        holiday.year = year;
        return holiday.save();
    });
}
exports.saveHoliday = saveHoliday;
function getHolidaysByYear(year) {
    return __awaiter(this, void 0, void 0, function* () {
        return holidays_schema_1.default.find({ year });
    });
}
exports.getHolidaysByYear = getHolidaysByYear;
function getAllHolidays() {
    return __awaiter(this, void 0, void 0, function* () {
        return holidays_schema_1.default.find().sort([['year', -1], ['month', 1], ['day', 1]]);
    });
}
exports.getAllHolidays = getAllHolidays;
function getHolidayByID(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return holidays_schema_1.default.findById(id);
    });
}
exports.getHolidayByID = getHolidayByID;
function deleteHolidaysByYear(year) {
    return __awaiter(this, void 0, void 0, function* () {
        return holidays_schema_1.default.deleteMany({ year });
    });
}
exports.deleteHolidaysByYear = deleteHolidaysByYear;
