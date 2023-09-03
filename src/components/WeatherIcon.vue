<template>
  <div class="weather-icon" v-if="weatherState.weatherType">
    <ThunderStorm v-if="weatherState.weatherType == 'Thunderstorm'" />
    <Drizzle v-else-if="weatherState.weatherType == 'Drizzle'" />
    <Rain v-else-if="weatherState.weatherType == 'Rain'" />
    <Snow v-else-if="weatherState.weatherType == 'Snow'" />
    <Clouds v-else-if="weatherState.weatherType == 'Clouds'" />
    <Clear v-else-if="weatherState.weatherType == 'Clear'" />
    <Atmosphere v-else />
  </div>
</template>

<script setup>
import { useWeatherStore } from '@/stores/weather';

import ThunderStorm from './icons/ThunderStorm.vue';
import Drizzle from './icons/Drizzle.vue';
import Rain from './icons/Rain.vue';
import Snow from './icons/Snow.vue';
import Clouds from './icons/Clouds.vue';
import Clear from './icons/Clear.vue';
import Atmosphere from './icons/Atmosphere.vue';

const weatherState = useWeatherStore();
</script>

<style>
.white {fill:#FFFFFF}
.gray {fill:#E0E0E0}
.yellow {fill:#FFEB3B}

.weather-icon {
  height: 150px;
  width: 150px;
  margin: 10px;
}

.weather-icon svg {
  width: 100%;
  height: 100%;
}
</style>