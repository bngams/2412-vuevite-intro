<script setup lang="ts">
  import Header from './components/layout/Header.vue';
  import Welcome from './pages/Welcome.vue'
</script>

<template>
  <v-app>
    <v-app-bar :elevation="2"> 
      <v-app-bar-title>Application Bar</v-app-bar-title>
    </v-app-bar>
    <div class="page-container">
      <Welcome></Welcome>
    </div>
  </v-app>
</template>

<style scoped>
</style>
