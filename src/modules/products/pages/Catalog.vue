<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import ProductList from '../components/ProductList.vue';
import { VProgressLinear } from 'vuetify/components';
import { ProductService } from '../services/product-service';
import { Products } from '../models/product';

const itemsPerPage = 10;
const currentPage = ref(1);
const products = ref<Products>([]);
const isLoading = ref(true);
const error = ref<string | null>(null);

const productService = new ProductService();

async function fetchProducts() {
  isLoading.value = true;
  error.value = null; // Clear previous error state
  try {
    const params = { 
     limit: itemsPerPage,
     skip: (currentPage.value - 1) * itemsPerPage 
    };
    products.value = await productService.getAll(params, 'products');
  } catch (err) {
    console.error('Error while fetching products:', err);
    error.value = (err as Error).message || 'An unexpected error occurred.';
    products.value = []; // Ensure products are empty in case of an error
  } finally {
    isLoading.value = false; // Ensure loading state is reset
  }
}

onMounted(fetchProducts);

watch(currentPage, fetchProducts);
</script>

<template>
  <h1 class="text-3xl font-bold">Catalog</h1>
  <div class="flex justify-between my-2">
    <button :disabled="currentPage === 1" @click="currentPage--">
      < Page {{ currentPage - 1 }}
    </button>
    <button @click="currentPage++">Page {{ currentPage }} ></button>
  </div>

  <!-- Loading Indicator -->
  <v-progress-linear
    v-if="isLoading"
    color="cyan"
    indeterminate
  ></v-progress-linear>

  <!-- Error Message -->
  <div v-if="error" class="error-message">
    <p>{{ error }}</p>
    <button @click="fetchProducts">Retry</button>
  </div>

  <!-- Product List -->
  <ProductList v-else-if="products.length" :products="products" />

  <!-- Empty State -->
  <div v-else>
    <p>No products found.</p>
  </div>
</template>

<style scoped>
.error-message {
  color: red;
  text-align: center;
  margin: 16px 0;
}
</style>
