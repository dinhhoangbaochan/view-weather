<script setup>
import SearchCity from './SearchCity.vue';
import CityBox from './CityBox.vue';
</script>

<template>
  <main>
    <h2>What is the weather?</h2>
    <p>Type in the city name that you want to search for the weather.</p>
    <div class="form">
      <SearchCity />
      <CityBox />
    </div>
  </main>
</template>