import { Response, Request } from "express";
import userServices from "../services/userServices";
import bunyan from "bunyan";

const log = bunyan.createLogger({
  name: "error",
  serializers: bunyan.stdSerializers,
});

class useControllers {
  //get req for all users
  async getUsers(req: Request, res: Response) {
    try {
      const data = await userServices.getUsers();
      res.status(200).send({ message: "successfull", data });
    } catch (err) {
      res.status(500).send(err);
    }
  }

  //post req
  async postUsers(req: Request, res: Response, next: any) {
    const body = req.body;
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

  //get req for single user
  async getSingleUser(req: Request, res: Response) {
    try {
      const id = await userServices.getSingleUser(req.params.id);
      res.status(200).send({ message: "successfull", id });
    } catch (err) {
      log.info(err);
      res.status(500).send(err);
    }
  }

  //update the user
  async updateUser(req: Request, res: Response) {
    // console.log(req.body,"req body")
    try {
      const updateData = await userServices.updateUser(req.params.id, req.body);
      res.status(200).send({ message: "successfull", updateData: updateData });
    } catch (err) {
      log.info(err);
      res.status(500).send(err);
    }
  }

  //delete the user
  async deleteUser(req: Request, res: Response) {
    try {
      const deleteData = await userServices.deleteUser(req.params.id);
      res.status(200).send({ message: "successfull", deleteData: deleteData });
    } catch (err) {
      log.info(err);
      res.status(500).send(err);
    }
  }
}

export default new useControllers();
