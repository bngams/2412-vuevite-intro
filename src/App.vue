<script setup lang="ts">
  import Header from './components/layout/Header.vue';
  import Welcome from './pages/Welcome.vue'
</script>

<template>
  <v-app>
    <Header></Header>
    <v-main>
      <v-container>
        <Welcome></Welcome>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
</style>
