<script setup>
import { ref, onMounted } from 'vue'
import BaseCard from '@/components/BaseCard.vue';
import { useRouter, useRoute } from 'vue-router'
import { useFavorites } from '@/stores/FavStore';

const items = ref([])
const { favorites } = useFavorites()
const router = useRouter()


console.log(favorites)
</script>

<template>
    <div class="flex flex-col justify-center items-center w-full">
        <h1>Favorites</h1>
        <button class="btn glass self-end mb-4 bg-red-500 text-black hover:text-white" @click="router.replace({path: '/'})">Come back</button>
        <section class="flex flex-wrap  gap-4 mt-2  ">
          <BaseCard v-for="meme in favorites" :key="meme.id" :meme="meme" />

        </section>
    </div>
</template>

