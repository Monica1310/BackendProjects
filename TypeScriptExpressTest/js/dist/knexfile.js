"use strict";
// Update with your config settings.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
const path_1 = __importDefault(require("path"));
const BASE_PATH = path_1.default.join(__dirname, "src", "server", "db");
module.exports = {
    development: {
        client: 'pg',
        connection: "postgres://postgres:656865@localhost:5432/testexp",
        migrations: {
            directory: path_1.default.join(BASE_PATH, "migrations"),
        },
        seeds: {
            directory: path_1.default.join(BASE_PATH, "seeds"),
        },
    },
};
