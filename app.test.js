const request = require("supertest");
const app = require("./app");

test("GET / should return message", async () => {
  const response = await request(app).get("/");
  expect(response.statusCode).toBe(200);
  expect(response.body.message).toBe("GitHub Actions Demo API is running");
});

test("GET /health should return UP", async () => {
  const response = await request(app).get("/health");
  expect(response.statusCode).toBe(200);
  expect(response.body.status).toBe("UPA");
});

test("GET /version should return version", async () => {
  const response = await request(app).get("/version");
  expect(response.statusCode).toBe(200);
  expect(response.body.version).toBe("1.0.0");
});