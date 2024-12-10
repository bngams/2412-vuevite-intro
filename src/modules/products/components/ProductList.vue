<script setup lang="ts">
    import { Product } from '../models/product';
    import ProductCard from './ProductCard.vue';

    const props = defineProps({
        products: {
            type: Array<Product>,
            required: true
        } 
    });
</script>

<template>
    <div class="products-container">
        <ProductCard v-for="product in products" :key="product.id" :product="product"></ProductCard>
    </div>
</template>

<style scoped>
    .products-container {
        display: flex;
        flex-wrap: wrap; /* Allows items to wrap to the next row */
        gap: 16px; /* Spacing between cards */
        justify-content: center; /* Aligns cards in the center */
        row-gap: 16px;
    }
</style>