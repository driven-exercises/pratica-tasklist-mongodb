import request from "../utils/request";
import { _setup, end, setEnv } from "../utils/serverRunner";
import sleep from "../utils/sleep";
import fs from "fs";
import { jest } from '@jest/globals'

// jest.setTimeout(25000);

beforeAll(async () => {
  setEnv("MONGO_URI", "mongodb://mongo_db:27017");
  await sleep(4000);
})

afterAll(() => {
  end();
});

// describe("GET /tasks", () => {
//   it("should respond with an empty array", async () => {
//     await _setup();

//     const response = await request.get("/tasks");

//     expect(response.data).toEqual([]);
//   });

//   it("should responde with status 404", async () => {
//     await _setup();

//     const nonExistingId = "non-existing";

//     const response = await request.get(`/tasks/${nonExistingId}`);

//     expect(response.status).toBe(404);
//   });

//   it("should create a new task", async () => {
//     await _setup();

//     const response = await request.post("/tasks", {
//       titulo: "Fazer exercicio compilado",
//       descricao: "Fazer exercicio número 20 do compilado de back-end"
//     });

//     expect(response.status).toEqual(201);
//   });

//   it("should respond with the complete list of tasks", async () => {
//     await _setup();

//     const response = await request.get("/tasks");

//     expect(response.data).toEqual([{
//       _id: expect.any(String),
//       titulo: "Fazer exercicio compilado",
//       descricao: "Fazer exercicio número 20 do compilado de back-end"
//     }]);
//   });

//   it("should respond with given tasks", async () => {
//     await _setup();

//     const customerId = (await request.get("/tasks")).data[0]._id;
//     const response = await request.get(`/tasks/${customerId}`);

//     expect(response.data).toEqual({
//       _id: customerId,
//       titulo: "Fazer exercicio compilado",
//       descricao: "Fazer exercicio número 20 do compilado de back-end"
//     });
//   });
// });

describe("Usage of Async/Await", () => {
  it.only("should be used async/await instead of .then() and .catch()", async () => {
    const code = fs.readFileSync("./src/app.js", "utf8");

    expect(code.indexOf("async")).toBeGreaterThan(-1);
    expect(code.indexOf("await")).toBeGreaterThan(-1);

    expect(code.indexOf(".then(tasks")).toBe(-1);
    expect(code.indexOf(".catch(")).toBe(-1);
  });
});

describe("Usage of Try/Catch", () => {
  it.only("should be used try/catch", async () => {
    const code = fs.readFileSync("./src/app.js", "utf8");

    expect(code.indexOf("try")).toBeGreaterThan(-1);
    expect(code.indexOf("catch")).toBeGreaterThan(-1);

    expect(code.indexOf(".catch(")).toBe(-1);
  });
});
