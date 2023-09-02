<script setup>
import AppHeader from './components/AppHeader.vue'
import AppBody from './components/AppBody.vue';

const apiKey = import.meta.env.VITE_OPEN_WEATHER_API_KEY
const cityName = 'London';
const countryCode = '+84';

// const weatherEndPoint = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${long}&appid=${appID}`;
const geocodingEndPoint = `http://api.openweathermap.org/geo/1.0/direct?q=Ho Chi Minh&limit=1&appid=${apiKey}`;

// const getGeocoding = async () => {
//   const req = await fetch(geocodingEndPoint, {method: 'GET'});
//   const res = await req.json();

//   return res;
// }

console.log(geocodingEndPoint);
</script>

<template>
  <AppHeader />
  <AppBody />
</template>

<style scoped>

</style>
