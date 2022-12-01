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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userQueries_1 = __importDefault(require("../queries/userQueries"));
class userServices {
    getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield userQueries_1.default.getUsers();
        });
    }
    postUsers(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield userQueries_1.default.postUsers(data);
        });
    }
    getSingleUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield userQueries_1.default.getSingleUser(id);
        });
    }
    updateUser(id, updateData) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield userQueries_1.default.updateUser(id, updateData);
        });
    }
    deleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield userQueries_1.default.deleteUser(id);
        });
    }
}
exports.default = new userServices();
