const hello = require("./helloWorld");

describe("Hello World", () => {
  test("Say Hi!", () => {
    expect(hello()).toEqual("Hello, World!");
  });
});
