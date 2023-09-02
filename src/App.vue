<script setup>
import AppHeader from './components/AppHeader.vue'
import AppBody from './components/AppBody.vue';


const cityName = 'London';
const countryCode = '+84';



// const getGeocoding = async () => {
//   const req = await fetch(geocodingEndPoint, {method: 'GET'});
//   const res = await req.json();

//   return res;
// }

// console.log(geocodingEndPoint);
</script>

<template>
  <AppHeader />
  <AppBody />
</template>

<style scoped>

</style>
