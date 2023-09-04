<template>
  <div class="city-box">
    <div class="left-column">
      <CitySearchInput />
      <WeatherIcon :weather-type="weatherState.weatherType" icon-type="svg" />
      <div class="weather-temperature">
        <p>{{ weatherState.temp }}°C</p>
      </div>

      <div class="break"></div>

      <div class="weather-city">
        <p>{{ weatherState.cityName }} <sup>{{ weatherState.country }}</sup></p>
      </div>
      <div class="weather-add-temp">
        <p>🚩 Kind of Weather: {{ weatherState.weatherType }} ({{ weatherState.weatherTypeDesc }})</p>
        <p>🌞 Feels like: {{ weatherState.tempMin }}°C</p>
        <p>🔷 Min: {{ weatherState.tempMin }}°C</p>
        <p>🔶 Max: {{ weatherState.tempMax }}°C</p>
      </div>
      <div class="weather-type"></div>
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
const apiKey = import.meta.env.VITE_OPEN_WEATHER_API_KEY;

</script>

<style lang="scss">
.location-wrapper {
  position: relative;
}
.city-box {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}

.left-column {
  max-width: 30%;
  background: linear-gradient(to bottom, #57c1eb 0%,#246fa8 100%);
  color: #fff;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
}

.right-column {
  max-width: 70%;
}

.right-column, .left-column {
  padding: 20px;
  width: 100%;
  
  @media (max-width: 1024px) {
    max-width: 100%;
    border-radius: 0;
  }

}

.weather-temperature p {
  font-size: 80px;
    font-weight: bold;
    margin: 0;
}

.weather-city p {
    font-size: 40px;
    font-weight: bold;
}

.weather-city sup {
    background: #ff5400;
    font-size: 20px;
    padding: 2px 8px;
}

.weather-add-temp p {
    font-size: 18px;
}
</style>