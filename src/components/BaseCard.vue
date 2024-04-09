<script setup>
import HeartIcon from './HeartIcon.vue';

    const props = defineProps({
        meme: Object,
        fav: Function,
        isFav: Boolean
    })

    

    

</script>

<template>
    <div class="card w-72 bg-green-50 shadow-xl text-black justify-between pt-4" >
        <div class="h-[90%]">
            
            <HeartIcon v-if="props.isFav" :class="props.isFav && 'text-red-500  w-full'"   @click="fav(meme)"/>
            <HeartIcon v-else="props.isFav" :class="!props.isFav && 'text-black  w-full'"   @click="fav(meme)"/>
            {{ meme.name }}
            <figure class="px-10 py-5">
                <img :src="meme.url"  class="rounded-xl" />
            </figure>

        </div>
        <div class="card-body items-center text-center bg-gray-200 rounded-b-xl">
            <h2 class="card-title">{{meme.name}}</h2>
           
        </div>
    </div>
</template>