const express = require('express')
const authData = require('../../middleware/authData')
const getAnimals = require('../index')
const getBreeds = require('../getsBreeds')
const GetAnimalById = require('../getPetsOfId')
const getShelters = require('../getShelterList')
const router = new express.Router()

router.get('/findpets', async (req, res) => {
    if (!req.query.animaltype) {
            return res.status(405).send({
            error: 'Insufficient data'
        })
    }

      const data = await getAnimals(req.query.animaltype, req.query.page, req.query.limit, req.query.breed, req.query.city,req.query.organization)
      .catch((err) => res.status(500).send(err))
        const pets = data.map((elem) => {
            return {
                name:elem.name,
                photo: elem.primary_photo_cropped?.small,
                breed: elem.breeds.primary,
                age: elem.age,
                id: elem.id
            }
         })
        res.status(200).send({pets})
})

router.get('/breedsList', async(req, res) => {
    getBreeds(req.query.type).then((pet) =>{
        let breedName = pet.map((name) => name.name)
        res.status(200).send({breedName})
    }).catch((e) => res.status(500).send(e))

})

router.get('/shelterList', async(req, res) => {
    getShelters().then((shelters) =>{
        let sheltersName = shelters.map((name) => name.id)
        res.status(200).send({sheltersName})
    }).catch((e) => res.status(500).send(e))

})

router.get('/pets/:id',authData , async (req, res) => {
    GetAnimalById(req.params.id).then((data) => {
        if(req.authDataPosition) {
            return {
             type: data.type,
             name: data.name,
             breeds: data.breeds.primary,
             age: data.age,
             size: data.size,
             location: data.contact.address.city,
             address: data.contact.address.address1,
             number: data.contact.phone,
             photo: data.primary_photo_cropped?.small,
             photo_medium: data.primary_photo_cropped?.medium,
             gender: data.gender,
             describe: data.description,
             country: data.contact.address.country,
             organization: data.organization_id,
             id: data.id
            }
    } else {
            return {
             type: data.type,
             name: data.name,
             breeds: data.breeds.primary,
             age: data.age,
             size: data.size,
             location: data.contact.address.city,
             photo: data.primary_photo_cropped?.small,
             photo_medium: data.primary_photo_cropped?.medium,
             gender: data.gender,
             describe: data.description,
             country: data.contact.address.country,
             id: data.id
            }
    }
   }).then((requestAuthData) => {
       res.status(200).send({requestAuthData})
   })
   .catch((err) => {
       res.status(400).send(err)
   })

})

module.exports = router


