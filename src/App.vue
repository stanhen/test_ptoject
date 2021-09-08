<template>
  <div id="app" class="app">
    <img @click="onbase" class='logo' src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Petfinder_logo.png"
      width="250"
      height="70" 
      alt="logo">
      <div class="hi_mess">
        <h4 v-if="auth">&#9989; Hi {{name}}</h4>
        <h4 v-if="!auth">&#10060; You are not authorized!</h4>
        <button class="c-button" @click="log_out" v-if="auth">log out</button>
        <button class="c-button" @click="register" v-if="!auth">Register</button>
        <button class="c-button" @click="log_in" v-if="!auth">log in</button>
      </div>
    <hr>
    <router-view />
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      auth: false,
      localAuthorization: localStorage.getItem("token") ,
      name:'',
    }
  },
  watch: {
    '$route': function() {
     if(localStorage.getItem('token') && localStorage.getItem('name')) {
      this.auth = true
      this.name = localStorage.getItem('name')
    }
  }
  },
  methods: {
    onbase(){
      this.$router.push('/');
    },
     log_in() {
      this.$router.push('/sign_in');
    },
    async log_out() {
      await axios
      .post(`${process.env.VUE_APP_URL}users/logout`,{},{
        headers:{
        "content-type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token")
        }
    })
    this.auth = false
    localStorage.removeItem('token')
    localStorage.removeItem('name')
    },
    register() {
      this.$router.push('/register');
    }
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #efeef1;
}
.logo {
  float: left;
}
img:hover {
  cursor: pointer;
}
.c-button {
  min-width: 100px;
  font-family: inherit;
  appearance: none;
  border: 0;
  border-radius: 5px;
  background: #4676d7;
  color: #fff;
  padding: 8px 16px;
  font-size: 1rem;
  cursor: pointer;
}

.c-button:hover {
  background: #1d49aa;
}

.c-button:focus {
  outline: none;
  box-shadow: 0 0 0 4px #cbd6ee;
}
h4{
  margin-top: 0px;
  margin-bottom: 10px;
}
</style>
