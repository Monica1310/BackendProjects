// const { Router } = require("express");
import { Router } from "express";
import userControllers from "../models/controllers/userController";

export const userRouter = Router();

userRouter.get("/get", userControllers.getUsers);
userRouter.post("/post", userControllers.postUsers);
userRouter.get("/getSingleUser/:id", userControllers.getSingleUser);
userRouter.put("/update/:id", userControllers.updateUser);
userRouter.delete("/delete/:id", userControllers.deleteUser);
