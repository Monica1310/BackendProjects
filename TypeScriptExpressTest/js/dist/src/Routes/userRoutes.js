"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
// const { Router } = require("express");
const express_1 = require("express");
const userController_1 = __importDefault(require("../models/controllers/userController"));
exports.userRouter = (0, express_1.Router)();
exports.userRouter.get("/get", userController_1.default.getUsers);
exports.userRouter.post("/post", userController_1.default.postUsers);
exports.userRouter.get("/getSingleUser/:id", userController_1.default.getSingleUser);
exports.userRouter.put("/update/:id", userController_1.default.updateUser);
exports.userRouter.delete("/delete/:id", userController_1.default.deleteUser);
