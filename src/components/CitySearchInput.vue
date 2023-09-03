<template>
  <div class="city-search-wrapper">
    <input type="text" @keyup="setCity($event)" placeholder="i.e Detroit" class="search-input">
    <input type="submit" value="search" @click="checkInput">
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
  const geocodingEndPoint = `http://api.openweathermap.org/geo/1.0/direct?q=${citySearch.value}&limit=1&appid=${apiKey}`;

  const req = await fetch(geocodingEndPoint, {method: 'GET'});
  const res = await req.json();

  return res;
}

const checkInput = () => {
  // clearTimeout(debounce.value);
  // debounce.value = setTimeout(() => {
    
  // }, 500)
  getGeocoding().then((result) => {
      geocoding.value = result;
      // console.log(result);
      getWeather(result[0]);
    });
}

const getWeather = async (cityInfo) => {
  let lat = cityInfo.lat;
  let long = cityInfo.lon;

  const weatherEndPoint = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${apiKey}`;
  const weatherForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&units=metric&cnt=5&appid=${apiKey}`;

  const req = await fetch(weatherEndPoint, {method: 'GET'});
  const res = await req.json();

  const reqForecast = await fetch(weatherForecast, {method: 'GET'});
  const resForecast = await reqForecast.json();

  console.log(resForecast);

  // const citySlug = res.name.replace(/\s/g, "").toLowerCase();
  // const imgReq = await fetch(`https://api.teleport.org/api/urban_areas/slug:${citySlug}/images/`);
  // const imgRes = await imgReq.json();

  // console.log(citySlug);
  // console.log(imgRes);
  
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
    windSpeed: res.wind.speed,
    cloud: res.clouds.all,
    sunrise: res.sys.sunrise,
    sunset: res.sys.sunset,
    forecast: resForecast.list
  }

  weatherStates.setWeatherInformation(weatherInfo);
  console.log(res)
  return res;
}

</script>

<style>
.search-input {
  border: none;
  background: transparent;
  font-size: 14px;
  color: #000;
}
</style>