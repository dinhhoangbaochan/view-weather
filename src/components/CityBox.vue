<template>
  <div class="city-box">
    <h3>{{ weatherState.cityName }}</h3>
  </div>
</template>

<script setup>
import { useWeatherStore } from '@/stores/weather';

const weatherState = useWeatherStore();
</script>
