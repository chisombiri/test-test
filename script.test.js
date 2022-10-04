const googleSearch = require("./script");

dbMock = ["dog.com", "boerboel.com", "walt.com"];

//describe groups tests
describe("googleSearch", () => {
  it("this is a test", () => {
    expect("hello").toBe("hello");
    googleSearch("testtest", dbMock);
  });

  it("google search test", () => {
    expect(googleSearch("testtest", dbMock)).toEqual([]);
    expect(googleSearch("dog", dbMock)).toEqual(["dog.com"]);
  });

  it("undefined or null input", () => {
    expect(googleSearch(undefined, dbMock)).toEqual([]);
    expect(googleSearch(null, dbMock)).toEqual([]);
  });

  it("does not return more than 3 matches", () => {
    expect(googleSearch(".com", dbMock).length).toEqual(3);
  });
});
