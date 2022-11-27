// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
const path = require("path");

const BASE_PATH = path.join(__dirname, "src", "server", "db");
module.exports = {
  development: {
    client: 'pg',
    connection: "postgres://postgres:656865@localhost:5432/testexp",
    migrations: {
      directory: path.join(BASE_PATH, "migrations"),
    },
    seeds: {
      directory: path.join(BASE_PATH, "seeds"),
    },
  },
};
