<template>
<div @click="open_info" class="pet">
   <img v-if="pet.photo" class="pet_photo"
      width="220"
      height="220"     
      :src=pet.photo
      :alt="small"
   >
   <img v-if="!pet.photo" class="pet_photo"
      width="220"
      height="220"     
      src="https://www.tsum.by/upload/no-photo.png"
      alt="small"
   >   
   <h2>{{pet.name.substr(0,6)}}</h2>
   <div>
     {{pet.age}} &bull;  {{pet.breed.substr(0,6)}}
 
   </div>
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
   img:hover {
     cursor: pointer;
   }
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