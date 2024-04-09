<script setup>
import { ref, onMounted } from 'vue'
import BaseCard from '@/components/BaseCard.vue';
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute();
const items = ref([])

onMounted(() => {
  if (route.query.items) {
    try {
      items.value = JSON.parse(route.query.items)
    } catch (e) {
      console.error('Error parsing items:', e);
      // Manejar el error como consideres apropiado
    }
  }
  console.log(items.value)

});

</script>

<template>
    <div>
        <h1>Favorites</h1>
        <button class="btn glass bg-red-500 text-black hover:text-white" @click="router.replace({path: '/'})">Come back</button>
        <BaseCard v-for="meme in items" :key="meme.id" :meme="meme"/>
    </div>
</template>

