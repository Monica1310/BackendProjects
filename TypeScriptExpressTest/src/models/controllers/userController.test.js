const request = require("supertest");
const makeApp = require("../../app");
const appForTest = makeApp();
const sinon = require("sinon");
const knexCommands = require("../queries/userQueries");

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
    query = sinon.stub(knexCommands, "getUsers").resolves([
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
    let res = await request(appForTest).get("/users/get");
    expect(res.statusCode).toEqual(200);
  });
  test("receiving appropriate message and data", async () => {
    let response = await request(appForTest).get("/users/get");
    expect(response.body).toEqual({
      message: "successfull",
      data: dataForTest,
    });
  });
});

describe("test for post request", () => {
  let query;
  beforeEach(() => {
    query = sinon.stub(knexCommands, "postUsers").resolves([]);
  });

  afterEach(() => {
    query.restore();
  });
  test("getting 200 status code for successful post", async () => {
    let res = await request(appForTest).post("/users/post").send({
      name: "Moni",
      email: "moni@gmail.com",
      age: 25,
    });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ message: "successfull", data: [] });
  });

  test("getting validation error message", async () => {
    let res = await request(appForTest).post("/users/post").send({
      name: "",
      email: "anu@gmail.com",
      age: 16,
    });
    expect(res.status).toBe(400);
    expect(res.body).toEqual({ message: "please enter require fields" });
  });
});
