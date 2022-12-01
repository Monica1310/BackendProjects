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
const userServices_1 = __importDefault(require("../services/userServices"));
const bunyan_1 = __importDefault(require("bunyan"));
const log = bunyan_1.default.createLogger({
    name: "error",
    serializers: bunyan_1.default.stdSerializers,
});
class useControllers {
    //get req for all users
    getUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield userServices_1.default.getUsers();
                res.status(200).send({ message: "successfull", data });
            }
            catch (err) {
                res.status(500).send(err);
            }
        });
    }
    //post req
    postUsers(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = req.body;
            if (req.body.name == "" || req.body.email == "" || req.body.age == "") {
                log.info("Bad Request");
                res.status(400).send({ message: "please enter require fields" });
            }
            else {
                try {
                    const postData = yield userServices_1.default.postUsers(body);
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
    //get req for single user
    getSingleUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = yield userServices_1.default.getSingleUser(req.params.id);
                res.status(200).send({ message: "successfull", id });
            }
            catch (err) {
                log.info(err);
                res.status(500).send(err);
            }
        });
    }
    //update the user
    updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // console.log(req.body,"req body")
            try {
                const updateData = yield userServices_1.default.updateUser(req.params.id, req.body);
                res.status(200).send({ message: "successfull", updateData: updateData });
            }
            catch (err) {
                log.info(err);
                res.status(500).send(err);
            }
        });
    }
    //delete the user
    deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const deleteData = yield userServices_1.default.deleteUser(req.params.id);
                res.status(200).send({ message: "successfull", deleteData: deleteData });
            }
            catch (err) {
                log.info(err);
                res.status(500).send(err);
            }
        });
    }
}
exports.default = new useControllers();
