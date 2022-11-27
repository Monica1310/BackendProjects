import { Express } from "express";
import { userDataType } from "../../Types/types";
const userQueries = require("../queries/userQueries");

class userServices {
  async getUsers() {
    return await userQueries.getUsers();
  }

  async postUsers(data:userDataType) {
    return await userQueries.postUsers(data);
  }
}

module.exports = new userServices();
