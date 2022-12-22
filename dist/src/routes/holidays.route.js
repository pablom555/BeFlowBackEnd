"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const holidays_controller_1 = require("../controllers/holidays.controller");
const holidaysRoutes = (0, express_1.Router)();
// Get all holidays
holidaysRoutes.get('/', holidays_controller_1.getHolidays);
// Get holiday by Id
holidaysRoutes.get('/:id', holidays_controller_1.getHolidaysByID);
exports.default = holidaysRoutes;
