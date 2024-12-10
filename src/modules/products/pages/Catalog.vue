<script setup lang="ts">
  import { reactive } from 'vue';
  import { PRODUCTS_MOCK } from '../mocks/products.mock';
  import ProductList from '../components/ProductList.vue';

  // ref, reactive
  const products = reactive(PRODUCTS_MOCK);

</script>

<template>
    <h1>Catalog</h1>
    <ProductList :products></ProductList>
</template>