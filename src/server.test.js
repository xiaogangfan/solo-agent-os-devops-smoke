const assert = require("node:assert/strict");
const test = require("node:test");
const { responseFor } = require("./server");

test("health endpoint is ready", () => {
  const response = responseFor("/health");
  assert.equal(response.statusCode, 200);
  assert.equal(response.body.status, "ok");
});
