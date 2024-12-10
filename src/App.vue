<script setup lang="ts">
  import Header from './components/layout/Header.vue';
</script>

<template>
  <v-app>
    <Header></Header>
    <v-main>
      <v-container>
        <RouterView />
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
</style>
