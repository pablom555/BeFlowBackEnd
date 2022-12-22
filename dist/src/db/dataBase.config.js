"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const DATA_BASE = process.env.LOCAL_MONGO_URI;
mongoose_1.default.set("strictQuery", false);
mongoose_1.default.connect(DATA_BASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true
});
const db = mongoose_1.default.connection;
db.on('error', () => {
    console.log('Error trying to connect to the DB');
});
db.once('open', () => {
    console.log(`⚡️[DataBase]: Connected to ${DATA_BASE}`);
});
module.exports = { db };
