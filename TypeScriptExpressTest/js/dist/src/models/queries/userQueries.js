"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = require("../../server/db/connection");
class userQueries {
    getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, connection_1.myKnex)("persons").select("*");
        });
    }
    postUsers(data) {
        return __awaiter(this, void 0, void 0, function* () {
            // console.log(data,"in queries")
            return yield (0, connection_1.myKnex)("persons").insert(data).returning("*");
        });
    }
    getSingleUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, connection_1.myKnex)("persons")
                .select("*")
                .where({ id: parseInt(id) });
        });
    }
    updateUser(id, updateData) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, connection_1.myKnex)("persons")
                .update(updateData)
                .where({ id: parseInt(id) });
        });
    }
    deleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, connection_1.myKnex)("persons")
                .del()
                .where({ id: parseInt(id) })
                .returning("*");
        });
    }
}
exports.default = new userQueries();
