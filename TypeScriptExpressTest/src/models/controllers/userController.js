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
const userServices = require("../services/userServices");
var Logger = require("bunyan");
var log = new Logger({ name: "error" });
class useControllers {
    getUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield userServices.getUsers();
            try {
                res.status(200).send({ message: "successfull", data });
            }
            catch (err) {
                res.status(500).send(err);
            }
        });
    }
    postUsers(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            var body = req.body;
            if (req.body.name == "" || req.body.email == "" || req.body.age == "") {
                log.info("Bad Request");
                res.status(400).send({ message: "please enter require fields" });
            }
            else {
                try {
                    const postData = yield userServices.postUsers(body);
                    res.status(200).send({ message: "successfull", data: postData });
                }
                catch (error) {
                    log.info(error, "Internal Server Error");
                    next(error);
                }
            }
            // console.log(body,body.name,body.email,"reqbody")
        });
    }
}
module.exports = new useControllers();
