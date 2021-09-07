<template>
<div @click="open_info" class="pet">
   <img class="pet_photo"
      width="220"
      height="220"     
      :src=pet.photo
      :alt="small"
   >
   <h2>{{pet.name}}</h2>
   <div>
     {{pet.age}} &bull;  {{pet.breed}}
 
   </div>



  <!--<router-link :to="'/pet/' + pet.id">More</router-link> -->
</div>
</template>

<script>
export default {
   props: ['pet'],
   methods: {
      async open_info() {
         this.$router.push(`/pet/${this.pet.id}`)
      }
   }
}
</script>>


<style scoped>
   .pet {
      display: inline-block;
      background: #fff;
      width: 250;
      height:auto;
      border-style: solid;
      padding: 0px;
      margin: 3px;
      border-radius: 25px;
   }
   .pet_photo {
     border-radius: 25px;
     width: 200;
   }
   .pet_info {
      display: inline-block;
   }

   h2{
      color: #6504b5;
          font-weight: inherit;
    font-style: inherit;
    font-family: inherit;
   }
   h4{
    color: #2e0152;
    font-weight: inherit;
    font-style: inherit;
    font-family: inherit;
   }
   div{
   display: inline-block;
   }

</style>