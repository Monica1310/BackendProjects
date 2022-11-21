// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 *
 */
const path = require("path");

const BASE_PATH = path.join(__dirname, "src", "server", "db");
module.exports = {
  development: {
    client: "pg",
    connection: "postgres://postgres:656865@localhost:5432/koa",
    migrations: {
      directory: path.join(BASE_PATH, "migrations"),
    },
    seeds: {
      directory: path.join(BASE_PATH, "seeds"),
    },
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
