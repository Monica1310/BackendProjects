const knex = require("../../server/db/connection");
import {userDataType} from "../../Types/types"

class userQueries {
  async getUsers() {
    return await knex("persons").select("*");
  }

  async postUsers(data:userDataType) {
    // console.log(data,"in queries")
    return await knex("persons").insert(data).returning("*");
  }
}

module.exports = new userQueries();
