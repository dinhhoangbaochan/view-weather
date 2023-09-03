<template>
  <div class="weather-icon" v-if="weatherType">
    <ThunderStorm v-if="weatherType == 'Thunderstorm'" :icon-display-style="iconType"/>
    <Drizzle v-else-if="weatherType == 'Drizzle'" :icon-display-style="iconType"/>
    <Rain v-else-if="weatherType == 'Rain'" :icon-display-style="iconType"/>
    <Snow v-else-if="weatherType == 'Snow'" :icon-display-style="iconType"/>
    <Clouds v-else-if="weatherType == 'Clouds'" :icon-display-style="iconType" />
    <Clear v-else-if="weatherType == 'Clear'" :icon-display-style="iconType"/>
    <Atmosphere v-else />
  </div>
</template>

<script setup>
defineProps({
  weatherType: String,
  iconType: String
})

import ThunderStorm from './icons/ThunderStorm.vue';
import Drizzle from './icons/Drizzle.vue';
import Rain from './icons/Rain.vue';
import Snow from './icons/Snow.vue';
import Clouds from './icons/Clouds.vue';
import Clear from './icons/Clear.vue';
import Atmosphere from './icons/Atmosphere.vue';

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