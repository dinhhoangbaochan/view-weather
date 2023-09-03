<template>
  <div class="city-box">
    <div class="left-column">
      <CitySearchInput />
      <WeatherIcon />
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

      <!-- Forecase Wrapper -->
      <div class="forecast-wrapper">
        <div class="forecast-box">Monday</div>
        <div class="forecast-box">Tuesday</div>
        <div class="forecast-box">Wednesday</div>
        <div class="forecast-box">Thursday</div>
        <div class="forecast-box">Friday</div>
      </div>

      <!-- Today's Information -->
      <div class="today-wrapper">
        <div class="today-box">
          <div class="today-box-inner">
            <div class="box-title">Wind Status</div>
            <div class=""></div>
          </div>
        </div>
        <div class="today-box">Information Title</div>
        <div class="today-box">Information Title</div>
        <div class="today-box">Information Title</div>
        <div class="today-box">Information Title</div>
        <div class="today-box">Information Title</div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { useWeatherStore } from '@/stores/weather';
import CitySearchInput from './CitySearchInput.vue';
import WeatherIcon from './WeatherIcon.vue';

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

.forecast-wrapper, .today-wrapper {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
}

.forecast-box {
  width: 18%;
  background: #fff;
  margin-right: 1%;
  height: 150px;
  border-radius: 10px;
  text-align: center;
}

.today-box {
    max-width: 33.33%;
    width: 100%;
    height: 150px;
    background-color: #fff;
    border-radius: 10px;
    margin-right: 1%;
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