<script setup>
import { ref, computed } from 'vue';
    let counter = ref(0)

     export const sumCounter = () => {
        counter.value += 1
    }
</script>

<template>
    <div class="flex flex-col items-center w-32 bg-white p-4 text-black rounded-md ">
        <div class="flex flex-row gap-4 pb-2">
            <p>Count: </p>
            <p>{{ counter }}</p>
        </div>
        <button @click="sumCounter" class="bg-gray-300 p-2 w-1/2 ">
            +1
        </button>
    </div>
</template>