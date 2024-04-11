<script setup>
import { ref, onMounted } from 'vue'
import BaseCard from '@/components/BaseCard.vue';
import { useRouter, useRoute } from 'vue-router'
import { useFavorites } from '@/stores/FavStore';
import BaseButton from '@/components/BaseButton.vue';
import BaseInput from '@/components/BaseInput.vue';

const items = ref([])
const inputValue = ref('');
const { favorites } = useFavorites()
const router = useRouter()


</script>

<template>
    <div class="flex flex-col justify-center items-center w-full">
        <h1>Favorites</h1>
        <BaseButton path="/">
          Home
        </BaseButton>
        <h1>Ver la información de hijo a padre</h1>
        
      

        <BaseInput v-model="inputValue"/>
        {{ inputValue }}
        <section class="flex flex-wrap  gap-4 mt-2  ">
          <BaseCard v-for="meme in favorites" :key="meme.id" :meme="meme" />

        </section>
    </div>
</template>
