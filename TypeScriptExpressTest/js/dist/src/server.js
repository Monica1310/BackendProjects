"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bunyan_1 = __importDefault(require("bunyan"));
const app_1 = __importDefault(require("./app"));
const log = bunyan_1.default.createLogger({
    name: "error",
    serializers: bunyan_1.default.stdSerializers,
});
// const Logger = require('bunyan')
// const log = new Logger({name:'server'})
const PORT = process.env.PORT || 8000;
const server = (0, app_1.default)();
server.listen(PORT, () => {
    log.info(`server started in port ${PORT}`);
});
