import { Response, Request } from "express";
const userServices = require("../services/userServices");
var Logger = require("bunyan");
var log = new Logger({ name: "error" });

class useControllers {
  async getUsers(req: Request, res: Response) {
    const data = await userServices.getUsers();
    try {
      res.status(200).send({ message: "successfull", data });
    } catch (err) {
      res.status(500).send(err);
    }
  }

  async postUsers(req: Request, res: Response, next: any) {
    var body = req.body;
    if (req.body.name == "" || req.body.email == "" || req.body.age == "") {
      log.info("Bad Request");
      res.status(400).send({ message: "please enter require fields" });
    } else {
      try {
        const postData = await userServices.postUsers(body);
        res.status(200).send({ message: "successfull", data: postData });
      } catch (error) {
        log.info(error, "Internal Server Error");
        next(error);
      }
    }
    // console.log(body,body.name,body.email,"reqbody")
  }
}

module.exports = new useControllers();
