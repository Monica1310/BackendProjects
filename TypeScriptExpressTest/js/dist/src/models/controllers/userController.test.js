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
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../../app"));
const appForTest = (0, app_1.default)();
const sinon_1 = require("sinon");
const userQueries_1 = __importDefault(require("../queries/userQueries"));
describe("test for get request", () => {
    let query;
    let dataForTest;
    beforeEach(() => {
        dataForTest = [
            {
                name: "Moni",
                email: "moni@gmail.com",
                age: "25",
            },
        ];
        query = (0, sinon_1.stub)(userQueries_1.default, "getUsers").resolves([
            {
                name: "Moni",
                email: "moni@gmail.com",
                age: "25",
            },
        ]);
    });
    afterEach(() => {
        query.restore();
    });
    test("receiving 200 status code", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(appForTest).get("/users/get");
        expect(res.statusCode).toEqual(200);
    }));
    test("receiving appropriate message and data", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(appForTest).get("/users/get");
        expect(response.body).toEqual({
            message: "successfull",
            data: dataForTest,
        });
    }));
});
describe("test for post request", () => {
    let query;
    beforeEach(() => {
        query = (0, sinon_1.stub)(userQueries_1.default, "postUsers").resolves([]);
    });
    afterEach(() => {
        query.restore();
    });
    test("getting 200 status code for successful post", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(appForTest).post("/users/post").send({
            name: "Moni",
            email: "moni@gmail.com",
            age: 25,
        });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ message: "successfull", data: [] });
    }));
    test("getting validation error message", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(appForTest).post("/users/post").send({
            name: "",
            email: "anu@gmail.com",
            age: 16,
        });
        expect(res.status).toBe(400);
        expect(res.body).toEqual({ message: "please enter require fields" });
    }));
    test("getting error message for posting non-json content", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(appForTest)
            .post("/postpersoninfo")
            .send("yfygyjgjgguytuytu");
        expect(res.status).toBe(500);
        expect(res.body).toEqual({ error: "internal server error" });
    }));
    //   describe("testing for put request", () => {
    //     let query;
    //     let dataForTest;
    //     beforeEach(() => {
    //       dataForTest = [
    //         {
    //           id: 1,
    //           name: "Moni",
    //           email: "moni@gmail.com",
    //           age: "25",
    //         },
    //       ];
    //       query = sinon.stub(knexCommands, "updateUser").resolves([]);
    //     });
    //     afterEach(() => {
    //       query.restore();
    //     });
    //     test("getting 200 status code for successful update", async () => {
    //       let res = await request(appForTest).put("/users/update/1").send({
    //         id: 1,
    //         name: "Soni",
    //       });
    //       //   expect(res.status).toBe(200);
    //       expect(res.body).toEqual({
    //         message: "successfull",
    //       });
    //     });
    //     // test("", () => {});
    //     // test("", () => {});
    //   });
    // describe("test for a single user", () => {
    //   let query:any;
    //   beforeEach(() => {
    //     query = stub(knexCommands, "getSingleUser").resolves([
    //       {
    //         id: 1,
    //         name: "Moni",
    //         email: "moni@gmail.com",
    //         age: "25",
    //       },
    //       {
    //         id: 2,
    //         name: "Priya",
    //         email: "pri@gmail.com",
    //         age: "24",
    //       },
    //     ]);
    //   });
    //   afterEach(() => {
    //     query.restore();
    //   });
    //   test("successfull status for getting a single user", async () => {
    //     const res = await request(appForTest).get("/users/getSingleUser/2").send({id:2});
    //     expect(res.body).toBe({});
    //   });
    // });
});
