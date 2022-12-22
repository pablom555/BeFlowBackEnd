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
const httpClientInterceptor_1 = __importDefault(require("./httpClientInterceptor"));
const constants_1 = require("../config/constants");
class Api extends httpClientInterceptor_1.default {
    constructor() {
        super(constants_1.HOLIDAYS_API_BASE);
    }
    get(url, config) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.instance.get(url, this.getBasicConfig(config));
        });
    }
    getBasicConfig(config) {
        return Object.assign({ headers: {
                'x-api-version': '1.0.0',
                'Content-Type': 'application/json',
            } }, config);
    }
}
exports.default = Api;
