import { Knex } from "knex";

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex: Knex) {
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
exports.down = function (knex: Knex) {
  return knex.schema.dropTable("persons");
};


