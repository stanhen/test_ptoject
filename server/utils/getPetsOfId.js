var petfinder = require("@petfinder/petfinder-js");
var client = new petfinder.Client({apiKey: process.env.API_KEY, secret: process.env.SECRET_API});



async function getAnimalById(_id) {
let pet = await client.animal.show(_id)
return pet.data.animal
}

module.exports = getAnimalById