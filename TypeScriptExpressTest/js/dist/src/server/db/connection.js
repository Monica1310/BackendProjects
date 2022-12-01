"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.myKnex = void 0;
const knexfile_1 = __importDefault(require("../../../knexfile"));
const knex_1 = __importDefault(require("knex"));
exports.myKnex = (0, knex_1.default)(knexfile_1.default.development);
