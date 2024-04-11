<script setup>
import { useRouter } from 'vue-router';

    const router = useRouter()
    const props = defineProps({
        path: String
    })

</script>

<template>
    <button class="btn glass self-end mb-4 bg-red-500 text-black hover:text-white" @click="router.push({path: path})">
        <slot></slot>
    </button>

</template>