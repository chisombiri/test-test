const googleDatabase = [
  "cryptware.com",
  "gameyfiji.com",
  "ifitness.com",
  "pitbullfiji.com",
  "kangaroofiji.com",
  "fiji.com",
];

const googleSearch = (searchInput) => {
  const matches = googleDatabase.filter((website) => {
    return website.includes(searchInput);
  });
  return matches.length > 3 ? matches.slice(0, 3) : matches;
};

console.log(googleSearch("fiji"));
