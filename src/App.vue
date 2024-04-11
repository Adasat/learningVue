<script setup>
  import { provide, ref } from 'vue'

  let count = ref(10000) // Junto Inject permite pasar información a un descendiente profundo


  provide('count', count)
</script>


<template>
  <RouterView></RouterView>

</template>

