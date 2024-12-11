<script lang="ts" setup>
import CartProviders from '../modules/products/providers/CartProviders.vue';
import MyProvider from './MyProvider.vue';

</script>

<template>
    <CartProviders>
        <MyProvider>
            <slot/>
        </MyProvider>
    </CartProviders>
</template>