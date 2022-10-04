//Asynchronous test
const fetch = require("node-fetch");

const getPeopleFetch = (fetch) => {
  return fetch("https://swapi.py4e.com/api/people")
    .then((res) => res.json())
    .then((data) => {
      return {
        count: data.count,
        results: data.results,
      };
    });
};

const getPeople = async (fetch) => {
  const getRequest = await fetch("https://swapi.py4e.com/api/people");
  const data = await getRequest.json();
  return {
    count: data.count,
    results: data.results,
  };
};

module.exports = {
  getPeople,
  getPeopleFetch,
};
