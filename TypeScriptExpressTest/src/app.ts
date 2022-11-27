const express = require("express");
require("dotenv").config();

function myApp() {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  const userRoutes = require("./Routes/userRoutes");

 
  app.use("/users", userRoutes);
  return app;
}

module.exports = myApp;
