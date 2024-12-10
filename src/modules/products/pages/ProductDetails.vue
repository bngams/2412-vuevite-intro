<script setup lang="ts">
  import { useRoute, useRouter } from 'vue-router';
  import ProductCard from '../components/ProductCard.vue';
  import { PRODUCTS_MOCK } from '../mocks/products.mock'
  import { Product } from '../models/product';
  import { onMounted, ref } from 'vue';

  const route = useRoute();
  const router = useRouter();

  // Get product ID from route params
  const productId = parseInt(route.params.id as string);

  // Find the product by ID
  const product = ref();

  function fetchProduct(){
    product.value = PRODUCTS_MOCK.find((item: Product) => item.id === productId);
    if (!product.value) {
      // redirect to not found
      router.push({ name: 'NotFound' });
    }
  }

  onMounted(fetchProduct);

</script>

<template>
  <div v-if="product" class="product-details-page">
    <h1>Product Details</h1>
    <!-- Display the ProductCard in details mode -->
    <ProductCard :product mode="details" />
  </div>
</template>