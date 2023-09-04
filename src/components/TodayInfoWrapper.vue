<template>
  <!-- Today's Information -->
  <div class="today-wrapper">
    <h3>Today's weather information</h3>

    <div class="today-info-list">
      <div class="today-box">
        <div class="today-box-inner">
          <div class="box-title">
            <h4>Wind Status</h4>
            <img src="@/assets/icons8-windsock.gif" alt="">
          </div>
          <div class="box-info">
            <p>{{ metersToKilometers(weatherState.windSpeed) }}<span class="unit">km/h</span></p>
          </div>
        </div>
      </div>

      <div class="today-box">
        <div class="today-box-inner">
          <div class="box-title">
            <h4>Sunrise & Sunset</h4>
            <img src="@/assets/icons8-sun.gif" alt="">
          </div>
          <div class="box-info">
            <div class="sunriseset">
              <img src="@/assets/icons8-up-50.png" alt="">
              <p>{{ unixToHumanReadable(weatherState.sunrise) }}</p>
            </div>
            <div class="sunriseset">
              <img src="@/assets/icons8-down-50.png" alt="">
              <p>{{ unixToHumanReadable(weatherState.sunset) }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="today-box">
        <div class="today-box-inner">
          <div class="box-title">
            <h4>Clouds</h4>
            <img src="@/assets/icons8-partly-cloudy-day.gif" alt="">
          </div>
          <div class="box-info">
            <p>{{ weatherState.cloud }}<span class="unit">%</span></p>
          </div>
        </div>
      </div>

      <div class="today-box">
        <div class="today-box-inner">
          <div class="box-title">
            <h4>Visibility</h4>
            <img src="@/assets/icons8-search.gif" alt="">
          </div>
          <div class="box-info">
            <p>{{ metersToKilometers(weatherState.visibility) }}<span class="unit">km</span></p>
          </div>
        </div>
      </div>

      <div class="today-box">
        <div class="today-box-inner">
          <div class="box-title">
            <h4>Humidity</h4>
            <img src="@/assets/icons8-haze.gif" alt="">
          </div>
          <div class="box-info">
            <p>{{ weatherState.humidity }}<span class="unit">%</span></p>
          </div>
        </div>
      </div>

      <div class="today-box">
        <div class="today-box-inner">
          <div class="box-title">
            <h4>Atmospheric pressure</h4>
            <img src="@/assets/icons8-barometer.gif" alt="">
          </div>
          <div class="box-info">
            <p>{{ weatherState.pressure }} <span class="unit">hpa</span></p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { useWeatherStore } from '@/stores/weather';
import { metersToKilometers, unixToHumanReadable } from '../../helpers/datetime.js'

const weatherState = useWeatherStore();
</script>

<style>
.today-wrapper {
  margin-top: 2rem;
}

.today-wrapper h3 {
    margin: 0;
    padding: 8px;
    font-size: 26px;
}

.today-info-list {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
}

.today-box {
  max-width: 33.33%;
  width: 100%;
  padding: 8px;
  min-height: 210px;
  max-height: 350px;
}

.today-box-inner {
  background: #fff;
  height: 100%;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 1px 1px 5px 0px #e1e1e1;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 1rem;
}

.box-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.box-title img {
    width: 30px;
    height: 30px;
}

.box-title h4 {
    margin: 0;
    font-size: 16px;
}

.box-info p {
    font-size: 40px;
    margin: 0;
}

.sunriseset {
    display: flex;
}
</style>