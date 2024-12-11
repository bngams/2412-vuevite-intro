<script setup lang="ts">
import { inject } from 'vue';

// get provide value with inject
const msg: any = inject('message');
</script>

<template>
    About page
    This is a provide msg : {{ msg.text }} 
</template>