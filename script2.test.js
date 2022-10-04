const fetch = require("node-fetch");
const swapi = require("./script2");

it("calls swapi to get people", () => {
  expect.assertions(1);
  return swapi.getPeople(fetch).then((data) => {
    expect(data.count).toEqual(87);
    //done();
  });
});

it("calls swapi to get people with fetch", () => {
  expect.assertions(2);
  return swapi.getPeopleFetch(fetch).then((data) => {
    expect(data.count).toEqual(87);
    expect(data.results.length).toBeGreaterThan(5);
  });
});

//mock
it("getPeople returns count and results", () => {
  const mockFetch = jest.fn().mockReturnValue(
    Promise.resolve({
      json: () =>
        Promise.resolve({
          count: 87,
          results: [0, 1, 2, 3, 4, 5],
        }),
    })
  );

  expect.assertions(3);

  return swapi.getPeopleFetch(mockFetch).then((data) => {
    expect(mockFetch.mock.calls.length).toBe(1);
    expect(data.count).toEqual(87);
    expect(data.results.length).toBeGreaterThan(5);
  });
});
