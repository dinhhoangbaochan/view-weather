<template>
  <input type="text" @keyup="setCity($event)" @input="checkInput">
  <div class="test">
    <div v-for="value in geocoding">
      City Name: {{ value.name }}
      Country: {{ value.state }}
      Country Code: {{ value.country }}
      Lat: {{ value.lat }}
      Long: {{ value.lon }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const apiKey = import.meta.env.VITE_OPEN_WEATHER_API_KEY

// const weatherEndPoint = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${long}&appid=${appID}`;

const citySearch = ref('');
const debounce = ref(null);
const geocoding = ref();
const cityInformation = ref({})

const setCity = (event) => {
  citySearch.value = event.target.value;
}

const getGeocoding = async () => {
  const geocodingEndPoint = `http://api.openweathermap.org/geo/1.0/direct?q=${citySearch.value}&limit=1&appid=${apiKey}`;

  const req = await fetch(geocodingEndPoint, {method: 'GET'});
  const res = await req.json();
  return res;
}

const checkInput = () => {
  clearTimeout(debounce.value);
  debounce.value = setTimeout(() => {
    getGeocoding().then((result) => {
    geocoding.value = result;
    console.log(result)
  });
  }, 500)
}

</script>