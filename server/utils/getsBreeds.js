var petfinder = require("@petfinder/petfinder-js");
var client = new petfinder.Client({apiKey: process.env.API_KEY, secret: process.env.SECRET_API});
//an array of animal breeds by type
async function getBreeds(type) {
  const breeds = await client.animalData.breeds(type)
  return breeds.data.breeds
}

module.exports = getBreeds