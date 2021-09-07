<template>
  <body>
    <div> 
    <PetsItem
    v-for="pet of pets" :key="pet.id"
    :pet="pet"
    />
  </div>
  </body>

</template>


<script>
import PetsItem from "@/components/PetsItem"
export default {
  props: ['pets'],
  components: {
    PetsItem
  }
}

</script>

<style scoped>
  body {
    background-color: #efeef1;
  }

</style>