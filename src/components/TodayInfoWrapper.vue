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
            <p>{{ weatherState.windSpeed }}</p>
          </div>
        </div>
      </div>

      <div class="today-box">
        <div class="today-box-inner">
          <div class="box-title">
            <h4>Sunrise & Sunset</h4>
            <img src="@/assets/icons8-sun.gif" alt="">
          </div>
          <div class="box-info"></div>
        </div>
      </div>

      <div class="today-box">
        <div class="today-box-inner">
          <div class="box-title">
            <h4>Clouds</h4>
            <img src="@/assets/icons8-partly-cloudy-day.gif" alt="">
          </div>
          <div class=""></div>
        </div>
      </div>

      <div class="today-box">
        <div class="today-box-inner">
          <div class="box-title">
            <h4>Visibility</h4>
            <img src="@/assets/icons8-search.gif" alt="">
          </div>
          <div class=""></div>
        </div>
      </div>

      <div class="today-box">
        <div class="today-box-inner">
          <div class="box-title">
            <h4>Humidity</h4>
            <img src="@/assets/icons8-haze.gif" alt="">
          </div>
          <div class=""></div>
        </div>
      </div>

      <div class="today-box">
        <div class="today-box-inner">
          <div class="box-title">
            <h4>Atmospheric pressure</h4>
            <img src="@/assets/icons8-barometer.gif" alt="">
          </div>
          <div class=""></div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { useWeatherStore } from '@/stores/weather';

const weatherState = useWeatherStore();
</script>

<style>
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
}

.today-box-inner {
    background: #fff;
}

.box-title {
    display: flex;
    justify-content: space-between;
}

.box-title img {
    width: 30px;
    height: 30px;
}

.box-title h4 {
    margin: 0;
}
</style>