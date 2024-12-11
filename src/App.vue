<script setup lang="ts">
  import { provide, ref } from 'vue';
  import Header from './components/layout/Header.vue';
  import CartProvider from './modules/products/providers/CartProviders.vue';
  import MyProvider from './providers/MyProvider.vue';

</script>

<template>
  <v-app>
    <MyProvider>
      <CartProvider>
        <Header></Header>
        <v-main>
          <v-container>
            <RouterView />
          </v-container>
        </v-main>
      </CartProvider>
    </MyProvider>
  </v-app>
</template>

<style scoped>
</style>
