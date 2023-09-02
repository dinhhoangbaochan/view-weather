<template>
  <input type="text" @keyup="findCity($event)" @input="checkInput">
</template>

<script setup>
import { ref } from 'vue';

const citySearch = ref('');
const debounce = ref(null);

const checkInput = () => {
  clearTimeout(debounce.value);
  debounce.value = setTimeout(() => {
    getCity();
  }, 500)
}

const findCity = (event) => {
  citySearch.value = event.target.value;
}

const getCity = () => {
  
}
</script>