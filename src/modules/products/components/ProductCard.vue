<script setup lang="ts">
    import { PropType } from 'vue';
    import { Product }  from '../models/product';

    const props = defineProps({
        product: {
            type: Object as PropType<Product>,
            required: true
        },
        mode: {
          type: String,
          required: false,
          default: 'card'
        } 
    });

    const addToCart = () => {
      console.log("Add to cart clicked");
    };

    // TODO: create a property isDetailedMode or others
    // to avoid comparison in template mode == 'details'

</script>

<template>

  <v-card class="mx-auto" :max-width="mode == 'details' ? '80%': '300px'">
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
      <p v-if="mode == 'details'">{{ product.description }}</p>
      <p class="font-weight-bold">Price: ${{ product.price }}</p>
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" @click="addToCart">Add to Cart</v-btn>
      <v-btn v-if="mode != 'details'" variant="text" color="secondary" :to="'/products/details/'+product.id">Details</v-btn>
    </v-card-actions>
  </v-card>
</template>