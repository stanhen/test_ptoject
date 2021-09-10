<template>
  <div>
        <form @submit.prevent="getData" class="form" id="form">
            <div class="radio">
            <label class="radio">
              <input v-model="type" @change="getBreeds" type="radio" name="type" value="Dog" required   oninvalid="this.setCustomValidity('Please select the type of animal')" oninput="this.setCustomValidity('')">Dog
              <div class="radio__text"></div>
            </label>
            <label class="radio">
              <input v-model="type" @change="getBreeds" type="radio" name="type" value="Cat">Cat
              <div class="radio__text"></div>
            </label>
          </div>
          <div>
          <br>
          </div>
        <div class="form_line">
          <div>
            <label for="city">City</label>
            <input @click.prevent="choose_type" v-if="!type" type="search" placeholder="Choose type" readonly />
            <input v-if="type" v-model="city" name="city" >
          </div>
          <div>
            <label id="shelter" for="shelter">Select shelter</label>
            <input @click.prevent="choose_type" v-if="!type" type="search" placeholder="Choose type" readonly />
            <input v-if="type" v-model="shelter" type="search" placeholder="Search" list="data_shelter" />
	            <datalist id="data_shelter">
                <option  v-for="(item, index) in shelters" :key="index">{{item}}</option>
	            </datalist>
            <div class="select-arrow"></div> 
          </div> 
          <div>
            <label id="breed" for="breed">Select breed</label>
            <input @click.prevent="choose_type" v-if="!type" type="search" placeholder="Choose type" list="data" readonly />
            <input v-if="type" v-model="breed" type="search" placeholder="Search" list="data" />
	            <datalist id="data">
                <option  v-for="(item, index) in breeds" :key="index">{{item}}</option>
	            </datalist>
            <div class="select-arrow"></div> 
          </div> 
          <button id="submit" type="submit">Search</button> 
          <button @click="clear" id="clear" type="reset">Clear form</button> 
        </div>
        </form> 
    <hr>
    <PetsList v-bind:pets='petsArr'/>
    <Loader v-if="loading" />
    <h1 v-if="message" class="not_found">{{message}}</h1>
    <div v-if="find">
      <button @click="previousPage">Back</button>
      <button @click="nextPage">Next</button> 
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import PetsList from '@/components/PetsList'
import Loader from '@/components/Loader'
export default {
  name: 'app',
  data() {
    return {
      page: 1,
      limit: 20,
      loading: false,
      find: false,
      type: '',
      city: '',
      breed: '',
      shelter: '',
      shelters: [],
      petsArr: [],
      breeds: [], 
      message: ''
    }
  },
  mounted(){
    if(sessionStorage.getItem('type')) {
      this.type = sessionStorage.getItem('type')
      this.page = sessionStorage.getItem('page')
      this.breed = sessionStorage.getItem('breed')
      this.city = sessionStorage.getItem('city')
      this.shelter = sessionStorage.getItem('shelter')
      this.getData()
      this.getBreeds()
    }
  },
  methods: {
    clear() {
      this.type = sessionStorage.removeItem('type')
      this.page = 1
      this.breed = sessionStorage.removeItem('breed')
      this.city = sessionStorage.removeItem('city')
      this.shelter = sessionStorage.removeItem('shelter')
    },
    choose_type() {
     const sub = document.getElementById('submit')
     sub.click()
    },
    async getData() {
      sessionStorage.setItem('type', this.type)
      sessionStorage.setItem('page', this.page)
      sessionStorage.setItem('breed', this.breed)
      sessionStorage.setItem('city', this.city)
      sessionStorage.setItem('shelter', this.shelter)

      this.message = ''
      this.loading = true
      await axios
      .get(`${process.env.VUE_APP_URL}findpets?animaltype=${this.type}&page=${this.page}&breed=${this.breed}&limit=${this.limit}&location=${this.city}&organization=${this.shelter}`, {
        headers:{
        "content-type": "application/json",
         Authorization: "Bearer " + localStorage.getItem("token")
        }
      })
      .then((response) => {
        if(response.data.pets.length == 0){
          this.message = 'Nothing found'
        }
        if(response.data.pets.length == 20) {
        this.find = true
        } else {
          this.find = false
        }
        this.petsArr = response.data.pets
        this.loading = false
      })
    },
    async getBreeds() {
      if ( this.type !== sessionStorage.getItem('type') ){
      this.shelter = ''
      this.breed  = ''
      this.city = ''
      this.breeds=[]
      this.shelters=[]
      }
      await axios
      .get(`${process.env.VUE_APP_URL}shelterList`)
      .then((shelterList) => {
        this.shelters = shelterList.data.sheltersName
      })
      await axios
      .get(`${process.env.VUE_APP_URL}breedsList?type=${this.type}`)
      .then((breedsListName) => {
        this.breeds = breedsListName.data.breedName
      })
    },
    async nextPage() {
      this.page++,
      this.getData()
    }, 
    async previousPage() {
      if(this.page === 1 ){
        return alert('impossible')
      }
      this.page--,
      this.getData()

    }
  },
  components: {
   Loader, PetsList
  }
}
</script>

<style scoped>
.not_found{
  padding-bottom: 479px;
  margin-bottom: 0px;
  background-color: #efeef1;
}
.form_line, .radio {
   display: flex;
 }
.radio input {
	position: absolute;
	z-index: -1;
	opacity: 0;
	margin: 10px 0 0 7px;
}
.radio__text {
	position: relative;
	padding: 0 0 0 35px;
	cursor: pointer;
}
.radio__text:before {
	content: '';
	position: absolute;
	top: -3px;
	left: 0;
	width: 22px;
	height: 22px;
	border: 1px solid #CDD1DA;
	border-radius: 50%;
	background: #FFF;
}
.radio__text:after {
	content: '';
	position: absolute;
	top: 1px;
	left: 4px;
	width: 16px;
	height: 16px;
	border-radius: 50%;
	background: #9FD468;
	box-shadow: inset 0 1px 1px rgba(0,0,0,.5);
	opacity: 0;
	transition: .2s;
}
.radio input:checked + .radio__text:after {
	opacity: 1;
}
.radio input:focus + .radio__text:before {
	box-shadow: 0 0 0 3px rgba(255,255,0,.7);
}

input {
   border: 1px solid #cccccc; 
   border-radius: 3px;
   -webkit-border-radius: 3px; 
   -moz-border-radius: 3px; 
   -khtml-border-radius: 3px; 
   background: #ffffff !important; 
   outline: none; 
   height: 24px; 
   width: 120px; 
   color: #2F4F4F; 
   font-size: 11px; 
   font-family: Tahoma; 
   margin: 5px;
}
</style>