<template>
  <input type="text" @keyup="setCity($event)" placeholder="i.e Detroit" class="search-input">
  <input type="submit" value="search" @click="checkInput">
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
  getGeocoding().then((result) => {
      geocoding.value = result;
      getWeather(result[0]);
    });
}

const getWeather = async (cityInfo) => {
  let lat = cityInfo.lat;
  let long = cityInfo.lon;

  const weatherEndPoint = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`;

  const req = await fetch(weatherEndPoint, {method: 'GET'});
  const res = await req.json();
  
  const weatherInfo = {
    cityName: cityInfo.name,
    lat: lat,
    long: long,
    country: cityInfo.country,
    weatherType: res.weather[0].main,
    weatherTypeDesc: res.weather[0].description,
    temp: res.main.temp,
    feelsLike: res.main.feels_like,
    tempMin: res.main.temp_min,
    tempMax: res.main.temp_max,
    visibility: res.visibility,
    windSpeed: res.wind.speed
  }

  weatherStates.setWeatherInformation(weatherInfo);

  return res;
}

</script>

<style>
.search-input {
  border: none;
  border-bottom: 1px solid white;
  background: transparent;
  font-size: 14px;
  width: 400px;
  height: 40px;
  color: #fff;
}
</style>