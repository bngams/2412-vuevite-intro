<script setup lang="ts">
    import { PropType } from 'vue';
    import { Product }  from '../models/product';

    const props = defineProps({
        product: {
            type: Object as PropType<Product>,
            required: true
        } 
    });

    const addToCart = () => {
      console.log("Add to cart clicked");
    };

</script>

<template>
  <v-card class="mx-auto" max-width="300">
    <v-img
      :src="product.thumbnail"
      alt="Product Image"
      height="200"
    ></v-img>
    <v-card-title>
      {{ product.title }}
    </v-card-title>
    <v-card-subtitle>
      {{ product.category }}
    </v-card-subtitle>
    <v-card-text>
      <!-- <p>{{ product.description }}</p> -->
      <p class="font-weight-bold">Price: ${{ product.price }}</p>
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" @click="addToCart">Add to Cart</v-btn>
      <v-btn variant="text" color="secondary">Details</v-btn>
    </v-card-actions>
  </v-card>
</template>