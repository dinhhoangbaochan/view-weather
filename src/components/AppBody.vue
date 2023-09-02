<template>
  <main>
    <h2>The main application</h2>
    <div class="form">
      <input type="text" :value="city" @input="onInput">
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue';

const city = ref('');

const onInput = (e) => {
  city.value = e.target.value;
}

console.log(city);
</script>