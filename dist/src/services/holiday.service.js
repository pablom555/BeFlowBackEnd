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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHoliday = exports.getHolidaysList = exports.loadHolidaysInDataBase = void 0;
const holidays_1 = require("../http/holidays");
const holiday_dao_1 = require("./../db/dao/holiday.dao");
function loadHolidaysInDataBase(year) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Delete holiday's rows from dataBase
            const { deletedCount } = yield (0, holiday_dao_1.deleteHolidaysByYear)(year);
            console.info(`Deleted ${deletedCount} holidays from ${year} year.`);
            // get list of holidays from api
            const holidays = yield (0, holidays_1.getHolidays)(year);
            console.info(`${holidays.length} holidays were obtained for the year ${year}.`);
            yield Promise.all(holidays.map((holiday) => (0, holiday_dao_1.saveHoliday)({
                day: holiday.dia,
                id: holiday.id,
                info: holiday.info,
                month: holiday.mes,
                reason: holiday.motivo,
                type: holiday.tipo,
                year: year
            })));
            console.info(`Holidays inserted successfully.`);
            return true;
        }
        catch (error) {
            console.error(error);
        }
    });
}
exports.loadHolidaysInDataBase = loadHolidaysInDataBase;
function getHolidaysList(year) {
    return __awaiter(this, void 0, void 0, function* () {
        return year ? (0, holiday_dao_1.getHolidaysByYear)(year) : (0, holiday_dao_1.getAllHolidays)();
    });
}
exports.getHolidaysList = getHolidaysList;
function getHoliday(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, holiday_dao_1.getHolidayByID)(id);
    });
}
exports.getHoliday = getHoliday;
