<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import ProductList from '../components/ProductList.vue';

  const isLoading = ref(true);
  const itemsPerPage = 10;
  const skip = ref(0);

  // ref, reactive ?? 
  const products = ref();

  async function fetchProducts() {
    try { 
      const response = await fetch(`https://dummyjson.com/products?limit=${itemsPerPage}&skip=${skip.value}`);
      const data = await response.json();
      products.value = data.products;
      isLoading.value = false;
    } catch(error) {
      console.log('Error while fetching products', error);
      alert('Error while fetch products');
      isLoading.value = false;
    } 
  }

  onMounted(fetchProducts)

  function nextPage() {
    skip.value += itemsPerPage;
    fetchProducts();
  } 

</script>

<template>
    <h1>Catalog</h1>
    <button @click="nextPage">Page {{ (skip/itemsPerPage) + 1 }}  ></button>
    <v-progress-linear
      v-if="isLoading"
      color="cyan"
      indeterminate
    ></v-progress-linear>
    <ProductList v-else :products></ProductList>
</template>