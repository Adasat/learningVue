<script setup>
import { useAttrs } from 'vue';
const attrs = useAttrs()

console.log(attrs.favorites)
</script>

<template>
     <ul class="mt-10">
      <li v-for="(value, key) in attrs" :key="key">{{ key }}: {{ value }}</li>
    </ul>

</template>