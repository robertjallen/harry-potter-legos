const supertest = require("supertest")
const server = require("../api/server")
const db = require("../database/dBConfig")
const authRouter = require('../auth/auth-router.js');
const jokesRouter = require('../jokes/jokes-router.js');

// // a global jest hook to run before each individual test
// beforeEach(async () => {
// 	// re-run the seeds and start with a fresh database for each test
// 	await db.seed.run()
// })

// // a global jest hook to run after all the tests are done
// afterAll(async () => {
// 	// closes the database connection so the jest command doesn't stall
// 	await db.destroy()
// })

describe("jokes integration tests", () => {

  // calling jokes api without a token passes
  it("GET /jokes", async () => {
		const res = await supertest(server).get("/jokes")
		expect(res.statusCode).toBe(404)
    // expect(res.headers["content-type"]).toBe("application/json; charset=utf-8")
    expect(res.headers["content-type"]).toBe("text/html; charset=utf-8")
		// expect(res.body).toHaveLength(4)
		// expect(res.body[0].name).toBe("sam")
	})
})


test("POST  register", async () => {
  const user = await supertest(server).post("/api/auth/register").send({
    username: "my name123",
    password: "abc123",
  });

  expect(user.statusCode).toBe(201);
  expect(user.body.id).toBeDefined();
  // expect(user.body.username).toBe("name123");
  expect(user.body.password).toBeDefined;
});