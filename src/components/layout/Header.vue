<script setup lang="ts">
// Script setup block can stay empty for now if no specific logic is required
</script>

<template>
  <v-app-bar :elevation="2" app>
    <!-- Logo on the left -->
    <v-app-bar-title>ACME</v-app-bar-title>
    
    <!-- Navigation Links in the center -->
    <div>
        <v-btn variant="text" to="/">Home</v-btn>
        <v-btn variant="text" to="/about">About</v-btn>
        <v-btn variant="text" to="/products">Products</v-btn>
    </div>
    
    <!-- Buttons on the right -->
    <v-spacer></v-spacer>
    <v-btn icon to="/cart">
      <v-icon>mdi-cart</v-icon>
    </v-btn>
    <v-btn variant="text" to="/login">Login</v-btn>
    <v-btn variant="text" to="/logout">Logout</v-btn>
  </v-app-bar>
</template>

<style scoped>
.nav-links {
  display: flex;
  gap: 16px; /* Space between navigation links */
  margin: 0 auto; /* Center navigation links */
}
</style>
