<template>
  <div class="forecast-wrapper">
    <h3>Forecast in 3-hour step</h3>
    <div class="forecast-list">
      <div class="forecast-box" v-for="value in forecastList">

        <div class="forecast-box-inner">
          <div class="forecast-datetime">{{ formatDateTime(value.dt_txt) }}</div>
          <div class="forecast-weather-type">
            <WeatherIcon :weather-type="value.weather[0].main" icon-type="gif"/>
          </div>
          <div class="forecast-temp">{{ value.main.temp }}°C <br /> ({{ value.main.temp_min }}°C/{{ value.main.temp_max }}°C)</div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import WeatherIcon from './WeatherIcon.vue';
import { formatDateTime } from '../../helpers/datetime';

defineProps({
  forecastList: Array
})
</script>

<style>
.forecast-list{
  display: flex;
  width: 100%;
  flex-wrap: wrap;
}

.forecast-box {
  width: 20%;
  /* background: #fff; */
  height: 150px;
  border-radius: 10px;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  padding: 8px;
}

.forecast-box-inner {
    background: #fff;
    padding: 10px 0;
    border-radius: 10px;
}
</style>