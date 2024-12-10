<script setup lang="ts">
  import Header from './components/layout/Header.vue';
  import CartProvider from './modules/products/providers/CartProviders.vue';
</script>

<template>
  <v-app>
    <CartProvider>
      <Header></Header>
      <v-main>
        <v-container>
          <RouterView />
        </v-container>
      </v-main>
    </CartProvider>
  </v-app>
</template>

<style scoped>
</style>
