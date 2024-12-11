<script setup lang="ts">
import { inject } from 'vue';
import { useAuthStore } from '../../modules/auth/stores/auth-store';

const authStore = useAuthStore();
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
    <v-btn v-if="!authStore.isLoggedIn" variant="text" to="/auth/login">Login</v-btn>
    <v-btn v-else variant="text" @clicl="authStore.logout()">Logout</v-btn>
  </v-app-bar>
</template>
