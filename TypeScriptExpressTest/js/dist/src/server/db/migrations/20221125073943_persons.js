"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("persons", (table) => {
        table.increments();
        table.string("name").notNullable().unique();
        table.string("email").notNullable().unique();
        table.integer("age").notNullable();
    });
};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable("persons");
};
