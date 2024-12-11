<script lang="ts" setup>
import { provide, ref } from "vue";

const refText = ref('this is a global provide text')
// object to provide
const providedObject = { 
    text: refText,
    editText: (value: string) => refText.value = value
}
// define a provide property
provide('message',  providedObject);
</script>

<template>
    <slot/>
</template>