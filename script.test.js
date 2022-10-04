const googleSearch = require("./script");

dbMock = ["dog.com", "boerboel.com", "walt.com"];

it("this is a test", () => {
  expect("hello").toBe("hello");
  googleSearch("testtest", dbMock);
});

it("google search test", () => {
  expect(googleSearch("testtest", dbMock)).toEqual([]);
  expect(googleSearch("dog", dbMock)).toEqual(["dog.com"]);
});
