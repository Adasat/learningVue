<script setup>
import HeartIcon from './HeartIcon.vue';
import { useFavorites } from '@/stores/FavStore';

const { favorites, controlFavorites } = useFavorites()

    const props = defineProps({
        meme: Object,

    })

const checkIsFav = (memeId) => {
    return favorites.some(favorite => favorite.id === memeId);
};

    

</script>

<template>
    <div class="card w-72 bg-green-50 shadow-xl text-black justify-between pt-4" >
        <div class="h-[90%]">
            
            <HeartIcon v-if="checkIsFav(meme.id)" :class="'text-red-500  w-full'"   @click="controlFavorites(meme)"/>
            <HeartIcon v-else="checkIsFav(meme.id)" :class="'text-black  w-full'"   @click="controlFavorites(meme)"/>
            <figure class="px-10 py-5">
                <img :src="meme.url"  class="rounded-xl" />
            </figure>

        </div>
        <div class="card-body items-center text-center bg-gray-200 rounded-b-xl">
            <h2 class="card-title">{{meme.name}}</h2>
           
        </div>
    </div>
</template>