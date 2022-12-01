import { Express } from "express";
import { userDataType } from "../../Types/types";
import userQueries from "../queries/userQueries";

class userServices {
  async getUsers() {
    return await userQueries.getUsers();
  }

  async postUsers(data: userDataType) {
    return await userQueries.postUsers(data);
  }

  async getSingleUser(id: string) {
    return await userQueries.getSingleUser(id);
  }

  async updateUser(id: string, updateData: userDataType) {
    return await userQueries.updateUser(id, updateData);
  }

  async deleteUser(id: string) {
    return await userQueries.deleteUser(id);
  }
}

export default new userServices();
