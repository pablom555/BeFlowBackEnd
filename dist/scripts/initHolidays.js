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
const dotenv_1 = __importDefault(require("dotenv"));
const holiday_service_1 = require("../src/services/holiday.service");
dotenv_1.default.config();
const { db } = require('../src/db/dataBase.config');
const exec = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const currentYear = new Date().getFullYear();
        console.info('Starting process to load holidays by current year...');
        yield (0, holiday_service_1.loadHolidaysInDataBase)(currentYear);
        console.info('Process finished succesfully');
    }
    catch (error) {
        console.error(error);
        process.exit(1);
    }
    process.exit(0);
});
db.once('open', exec);
