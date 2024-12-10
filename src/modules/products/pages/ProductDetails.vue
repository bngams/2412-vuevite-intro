<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import ProductCard from '../components/ProductCard.vue';
import { Product } from '../models/product';
import { onMounted, ref } from 'vue';

const route = useRoute();
const router = useRouter();

// Get product ID from route params
const productId = parseInt(route.params.id as string);

// Reactive state for product
const product = ref<Product | null>(null);
const isLoading = ref(false); // Optional: To show a loading indicator
const error = ref<string | null>(null); // Optional: To handle errors

// Function to fetch product details from API
async function fetchProduct() {
  isLoading.value = true;
  try {
    const response = await fetch(`https://dummyjson.com/products/${productId}`);
    if (!response.ok) {
      throw new Error('Product not found');
    }
    const data: Product = await response.json();
    product.value = data;
  } catch (err) {
    error.value = (err as Error).message;
    // Redirect to NotFound page if product is not found
    router.push({ name: 'NotFound' });
  } finally {
    isLoading.value = false;
  }
}

onMounted(fetchProduct);
</script>

<template>
  <div class="product-details-page">
    <h1>Product Details</h1>

    <!-- Loading state -->
    <div v-if="isLoading">Loading...</div>

    <!-- Error state -->
    <div v-if="error">{{ error }}</div>

    <!-- Product details -->
    <ProductCard v-if="product" :product="product" mode="details" />
  </div>
</template>
