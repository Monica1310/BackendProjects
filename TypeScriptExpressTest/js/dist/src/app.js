"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bunyan_1 = __importDefault(require("bunyan"));
const userRoutes_1 = require("./Routes/userRoutes");
const log = bunyan_1.default.createLogger({
    name: "error",
    serializers: bunyan_1.default.stdSerializers,
});
function myApp() {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: true }));
    app.use("/users", userRoutes_1.userRouter);
    //middleware for testing request headers
    app.use((req, res, next) => {
        try {
            if (req.headers["content-type"] == "application/json" ||
                req.method == "GET") {
                log.info("content type json received");
                next();
            }
            else {
                res.status(500).send({ error: "internal server error" });
                log.warn("content type error");
            }
        }
        catch (err) {
            res.status(500).send({ error: err.message });
        }
    });
    //middleware ends
    return app;
}
exports.default = myApp;
module.exports = myApp;
