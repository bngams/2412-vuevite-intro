<script setup lang="ts">
  import Header from './components/layout/Header.vue';
  import GlobalProvider from './providers/GlobalProvider.vue';
</script>

<template>
  <v-app>
    <GlobalProvider>
      <Header></Header>
      <v-main>
        <v-container>
          <RouterView />
        </v-container>
      </v-main>
    </GlobalProvider>
  </v-app>
</template>

<style scoped>
</style>
