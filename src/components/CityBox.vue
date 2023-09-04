<template>
  <div class="city-box">
    <div class="left-column">
      <CitySearchInput />
      <WeatherIcon :weather-type="weatherState.weatherType" icon-type="svg" />
      <div class="weather-temperature">
        <p>{{ weatherState.temp }}°C</p>
      </div>
      <div class="weather-add-temp">
        <p>Feels like: {{ weatherState.tempMin }}</p>
        <p>Min: {{ weatherState.tempMin }}</p>
        <p>Max: {{ weatherState.tempMax }}</p>
      </div>
      <div class="break"></div>
      <div class="weather-city">
        <p>{{ weatherState.cityName }} <span>{{ weatherState.country }}</span></p>
      </div>
      <div class="weather-type">{{ weatherState.weatherType }}</div>
      <div class="weather-type">{{ weatherState.weatherTypeDesc }}</div>
    </div>
    <div class="right-column">

      <ForecastWrapper v-if="weatherState.getForecastList.length > 0" :forecast-list="weatherState.getForecastList" />
      <TodayInfoWrapper />

    </div>
  </div>
</template>

<script setup>
import { useWeatherStore } from '@/stores/weather';
import CitySearchInput from './CitySearchInput.vue';
import WeatherIcon from './WeatherIcon.vue';
import ForecastWrapper from './ForecastWrapper.vue';
import TodayInfoWrapper from './TodayInfoWrapper.vue';

const weatherState = useWeatherStore();
</script>

<style>
.city-box {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}

.right-column, .left-column {
  padding: 20px;
  width: 100%;
}

.left-column {
  max-width: 30%;
  background: linear-gradient(to bottom, #57c1eb 0%,#246fa8 100%);
  color: #fff;
}

.right-column {
  max-width: 70%;
}

.weather-temperature p {
  font-size: 80px;
    font-weight: bold;
    margin: 0;
}

.weather-city p span {
    background: #ff5400;
    font-size: 14px;
    padding: 5px 20px;
    font-weight: bold;
}
</style>