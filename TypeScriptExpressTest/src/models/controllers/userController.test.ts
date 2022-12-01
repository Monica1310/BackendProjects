import request from "supertest";
import makeApp from "../../app";
const appForTest = makeApp();
import { stub } from "sinon";
import knexCommands from "../queries/userQueries";


describe("test for get request", () => {
  let query:any;
  let dataForTest:any;
 
  beforeEach(() => {
    dataForTest = [
      {
        name: "Moni",
        email: "moni@gmail.com",
        age: "25",
      },
    ];
    query = stub(knexCommands, "getUsers").resolves([
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

  test("receiving 200 status code", async () => {
    const res = await request(appForTest).get("/users/get");
    expect(res.statusCode).toEqual(200);
  });
  test("receiving appropriate message and data", async () => {
    const response = await request(appForTest).get("/users/get");
    expect(response.body).toEqual({
      message: "successfull",
      data: dataForTest,
    });
  });
});

describe("test for post request", () => {
  let query:any;
  beforeEach(() => {
    query = stub(knexCommands, "postUsers").resolves([]);
  });

  afterEach(() => {
    query.restore();
  });

  test("getting 200 status code for successful post", async () => {
  const res = await request(appForTest).post("/users/post").send({
      name: "Moni",
      email: "moni@gmail.com",
      age: 25,
    });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ message: "successfull", data: [] });
  });

  test("getting validation error message", async () => {
    const res = await request(appForTest).post("/users/post").send({
      name: "",
      email: "anu@gmail.com",
      age: 16,
    });
    expect(res.status).toBe(400);
    expect(res.body).toEqual({ message: "please enter require fields" });
  });

  test("getting error message for posting non-json content", async () => {
    const res = await request(appForTest)
      .post("/postpersoninfo")
      .send("yfygyjgjgguytuytu");
    expect(res.status).toBe(500);
    expect(res.body).toEqual({ error: "internal server error" });
  });

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
