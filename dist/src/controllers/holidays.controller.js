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
exports.getHolidaysByID = exports.getHolidays = void 0;
const holiday_service_1 = require("../services/holiday.service");
function getHolidays(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const yearFilter = !isNaN(Number(req.query.year)) ? Number(req.query.year) : undefined;
            const holidaysDB = yield (0, holiday_service_1.getHolidaysList)(yearFilter);
            return res.status(200).send(holidaysDB);
        }
        catch (error) {
            return res.status(500).send(`Error: ${error}`);
        }
    });
}
exports.getHolidays = getHolidays;
function getHolidaysByID(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const holidayDB = yield (0, holiday_service_1.getHoliday)(id);
            if (holidayDB) {
                return res.status(200).send(holidayDB);
            }
            else {
                return res.status(404).send("Holiday not Found");
            }
        }
        catch (error) {
            return res.status(500).send(`Error: ${error}`);
        }
    });
}
exports.getHolidaysByID = getHolidaysByID;
