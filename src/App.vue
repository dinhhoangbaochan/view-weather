<script setup>
import AppBody from './components/AppBody.vue';
</script>

<template>
  <AppBody />
</template>

<style lang="scss">
*, *::after,*::before{
  box-sizing:border-box;
}

#app {
  max-width: 1440px;
  margin: 0 auto;
  background-color: #f6f6f8;
  font-weight: normal;
  width: 100%;
  border-radius: 20px;

  @media (max-width: 1024px) {
    border-radius: 0;
  }
}

body {
  background-color: #d6d7da;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1024px) {
    flex-direction: row;
  }
}
</style>