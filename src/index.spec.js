const someFunction = require("./index");

test("should return hello world", () => {
  expect(someFunction()).toBe("hello world!");
});
