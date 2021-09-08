var petfinder = require("@petfinder/petfinder-js");
var client = new petfinder.Client({apiKey: process.env.API_KEY, secret: process.env.SECRET_API});

async function getShelters() {
  const shelters = await client.organization.search()
  return shelters.data.organizations
}

module.exports = getShelters