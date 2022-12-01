import express from "express";

import { Request, Response } from "express";
import bunyan from "bunyan";
import { userRouter } from "./Routes/userRoutes";

const log = bunyan.createLogger({
  name: "error",
  serializers: bunyan.stdSerializers,
});

export default function myApp() {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use("/users", userRouter);

  //middleware for testing request headers

  app.use((req: Request, res: Response, next: any) => {
    try {
      if (
        req.headers["content-type"] == "application/json" ||
        req.method == "GET"
      ) {
        log.info("content type json received");
        next();
      } else {
        res.status(500).send({ error: "internal server error" });
        log.warn("content type error");
      }
    } catch (err: any) {
      res.status(500).send({ error: err.message });
    }
  });

  //middleware ends

  return app;
}

module.exports = myApp;
