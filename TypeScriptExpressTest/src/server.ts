// const express = require("express");
// import { Request, Response } from "express";

// require("dotenv").config();
// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// const userRoutes = require("./Routes/userRoutes");

// app.use("/users", userRoutes);

// app.get("/", (req: Request, res: Response) => {
//   res.status(200).send("hello");

// });

var Logger = require('bunyan')
var log = new Logger({name:'server'})

const PORT = process.env.PORT || 8000;

const myApplication = require("./app");

const server = myApplication();

server.listen(PORT, () => {
  log.info(`server started in port ${PORT}`);
});
