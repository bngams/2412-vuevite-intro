<script setup lang="ts">
import { inject } from 'vue';

const totalItems = inject('totalItems') as () => number;
</script>

<template>
  <v-app-bar :elevation="2" app>
    <v-app-bar-title>ACME</v-app-bar-title>
    <div>
      <v-btn variant="text" to="/">Home</v-btn>
      <v-btn variant="text" to="/about">About</v-btn>
      <v-btn variant="text" to="/products">Products</v-btn>
    </div>
    <v-spacer></v-spacer>
    <v-btn icon to="/cart">
      <v-icon>mdi-cart</v-icon>
      <v-badge
        v-if="totalItems() > 0"
        :content="totalItems()"
        color="primary"
        overlap
      ></v-badge>
    </v-btn>
    <v-btn variant="text" to="/login">Login</v-btn>
    <v-btn variant="text" to="/logout">Logout</v-btn>
  </v-app-bar>
</template>
