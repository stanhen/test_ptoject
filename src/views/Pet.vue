<template>
  <div>
    <img 
      :src=petsArr.photo_medium
      :alt="small"
      >
    <span> 
      <h1>{{petsArr.name}}</h1>
      <h2>{{petsArr.breeds}} &bull; {{petsArr.location}}, {{petsArr.country}}</h2>
    </span>
    <hr>
    <span>
      <h2>{{petsArr.age}} &bull; </h2>
      <h2>{{petsArr.gender}} &bull; </h2>
      <h2>{{petsArr.size}}</h2>
      <h1>About</h1>
      <p>{{petsArr.describe}}</p>
      <hr>
      <h1 v-if="auth">Contact</h1>
      <h2> Number</h2>
      <h2>&#128222;</h2>
      <h2 v-if="!auth">: To receive such information, you must register</h2>
      <h2>{{petsArr.number}}</h2>
      <div></div>
      <h2>Address</h2>
      <h2>&#128211;</h2>
      <h2 v-if="!auth">: To receive such information, you must register</h2>
      <h2>{{petsArr.address}}</h2>
      <div></div>
      <h2>Shelter</h2>
      <h2>&#128062;</h2>
      <h2 v-if="!auth">: To receive such information, you must register</h2>
      <h2>{{petsArr.organization_id}}</h2>
    </span>




  </div>
</template>


<script>
import {HTTP} from '../http/http-common';
import axios from 'axios';
export default {
    props: ['pet_id'],
    data() {
        return {
          petsArr: [],
          auth: ''
        }
    },
    mounted() {
        this.fetchPetRequest();
      if(localStorage.getItem('token') && localStorage.getItem('name')) {
      this.auth = true
  }
    },

    methods: {
      async fetchPetRequest() {
      this.loading = true
      await axios
      HTTP.get(`pets/` + this.pet_id, {
        headers:{
        "content-type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token")
        }
      }) 
      .then((pets) =>  {
        this.loading = false
        this.petsArr = pets.data.requestAuthData
      })
        }
    },
}
</script>


<style scoped>
h2{
  display: inline;
}


</style>