import { myKnex as knex } from "../../server/db/connection";
import { userDataType } from "../../Types/types";

class userQueries {
  async getUsers() {
    return await knex("persons").select("*");
  }

  async postUsers(data: userDataType) {
    // console.log(data,"in queries")
    return await knex("persons").insert(data).returning("*");
  }

  async getSingleUser(id: string) {
    return await knex("persons")
      .select("*")
      .where({ id: parseInt(id) });
  }

  async updateUser(id: string, updateData: userDataType) {
    return await knex("persons")
      .update(updateData)
      .where({ id: parseInt(id) });
  }

  async deleteUser(id: string) {
    return await knex("persons")
      .del()
      .where({ id: parseInt(id) })
      .returning("*");
  }
}

export default new userQueries();
