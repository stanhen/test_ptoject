var petfinder = require("@petfinder/petfinder-js");

//API server request
async function showAnimals(animalType, page, limit, breedName, city) {
  const client = new petfinder.Client({ apiKey: process.env.API_KEY, secret: process.env.SECRET_API});
  let apiResult
  let data = [];
    apiResult = await client.animal.search({
      type: animalType,
      breed: breedName,
      location: city,
//      organization: organizationID,
      page,
      limit,
    })
    apiResult.data.animals.map((pet) => data.push(pet))
  return data;
}


module.exports = showAnimals;