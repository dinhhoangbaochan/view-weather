<template>
  <div class="city-box">
    <div class="left-column">
      <div class="">weather icon</div>
      <div class="">Temperature</div>
      <div class="">Sunday, 03 September 2023, 3:54PM</div>
      <br>
      <div class="">Weather Description</div>
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
        <div class="today-box">Information Title</div>
        <div class="today-box">Information Title</div>
        <div class="today-box">Information Title</div>
        <div class="today-box">Information Title</div>
        <div class="today-box">Information Title</div>
        <div class="today-box">Information Title</div>
      </div>

    </div>
    <!-- <h3>{{ weatherState.cityName }} <span>{{ weatherState.country }}</span></h3>
    <p>Coordinate: [{{ weatherState.latitude }} - {{ weatherState.longtitude }}]</p>
    <p><strong>Currently:</strong> {{ weatherState.weatherType }}</p>
    <p>{{ weatherState.weatherTypeDesc }}</p> -->
  </div>
</template>

<script setup>
import { useWeatherStore } from '@/stores/weather';

const weatherState = useWeatherStore();
</script>

<style>
.city-box {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}

.left-column {
  max-width: 30%;
  width: 100%;
}

.right-column {
  max-width: 70%;
  width: 100%;
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
</style>