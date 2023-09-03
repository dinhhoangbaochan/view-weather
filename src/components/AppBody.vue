<script setup>
import CityBox from './CityBox.vue';
import CitySearchInput from './CitySearchInput.vue';

</script>

<template>
  <main>

    <!-- <div class="search-form">
      <CitySearchInput />
    </div> -->

    <div class="city-row">
      <CityBox />
    </div>
  </main>
</template>

<style scoped>
.search-form {
  padding: 15px;
  backdrop-filter: blur(3px);
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  margin-bottom: 2rem;
}
</style>