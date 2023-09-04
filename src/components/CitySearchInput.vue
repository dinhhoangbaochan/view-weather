<template>
  <div class="city-search-wrapper">
    <input type="text" @keyup="setCity($event)" placeholder="i.e Detroit" class="search-input" @submit="checkInput">
    <input type="submit" value="Search" @click="checkInput" class="search-submit">
  </div>
  <div class="guide-text">
    <p>👉 Start by typing the city you want to check for weather, then click <b>Search</b>!</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useWeatherStore } from '@/stores/weather';

const weatherStates = useWeatherStore();
const apiKey = import.meta.env.VITE_OPEN_WEATHER_API_KEY

const citySearch = ref('');
const debounce = ref(null);
const geocoding = ref();

const setCity = (event) => {
  citySearch.value = event.target.value;
}

const getGeocoding = async () => {
  const geocodingEndPoint = `https://api.openweathermap.org/geo/1.0/direct?q=${citySearch.value}&limit=1&appid=${apiKey}`;

  const req = await fetch(geocodingEndPoint, {method: 'GET'});
  const res = await req.json();

  return res;
}

const checkInput = () => {
  weatherStates.setInfoStatus('searching');
  getGeocoding().then((result) => {
      geocoding.value = result;
      const cityInfo = result[0];
      weatherStates.handleWeatherInfo(cityInfo.name, cityInfo.country, cityInfo.lat, cityInfo.lon, apiKey);

      weatherStates.setInfoStatus('responded');
    }).catch((err) => {
      weatherStates.setInfoStatus('error');
      alert('We couldn\'t find that city, are you sure this city exists?');
    });
}

</script>

<style>
.city-search-wrapper {
    min-height: 40px;
    display: flex;
}

.guide-text {
  margin: 1rem 0;
    font-size: 14px;
    font-style: italic;
    color: #011627;
    border: 1px solid #f5f5f7;
    padding: 10px;
    background: #f5f5f7;
}

.search-input {
  border: 1px solid #fff;
  background: transparent;
  font-size: 14px;
  color: #000;
  background: #fff;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  height: 40px;
  padding: 10px;
  width: 80%;
}

input.search-submit {
    width: 20%;
    border: 1px solid #fff;
    font-size: 14px;
    font-weight: bold;
    background: white;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    height: 40px;
    transition: .2s ease all;
}

input.search-submit:hover {
  background-color: #f6f6f8;
  cursor: pointer;
}
</style>