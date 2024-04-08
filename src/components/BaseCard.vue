<script setup>
import { watch, watchEffect } from 'vue';
import HeartIcon from './HeartIcon.vue';

    const props = defineProps({
        meme: Object,
        fav: Function,
        isFav: Boolean
    })

    

    

</script>

<template>
    <div class="card w-96 bg-green-200   shadow-xl">
        <HeartIcon :class="props.isFav && 'text-red-500'" class="w-24 text-black"  @click="fav(meme.id)"/>
        {{ isFav }}
        <figure class="px-10 pt-10">
            <img :src="meme.url"  class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
            <h2 class="card-title">{{meme.name}}</h2>
           
        </div>
    </div>
</template>