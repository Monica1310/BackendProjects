"use strict";
const { Router } = require("express");
const userControllers = require("../models/controllers/userController");
const userRouter = Router();
userRouter.get("/get", userControllers.getUsers);
userRouter.post("/post", userControllers.postUsers);
module.exports = userRouter;
