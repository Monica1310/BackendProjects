import config from "../../../knexfile";
import knex from "knex";

export const myKnex = knex(config.development);
