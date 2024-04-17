<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    meal: String
})

const emit = defineEmits(['removeElement'])

const removeMeal = () => {
    emit('removeElement', props.meal)
}
</script>

<template>
    <div class="flex justify-between items-center bg-white p-4 mb-4 cursor-pointer  rounded-md text-black">
        <p> {{ meal }} </p>
        <lord-icon
            src="https://cdn.lordicon.com/kkqzqltd.json"
            trigger="hover"
            stroke="light"
            state="hover-enlarge"
            colors="primary:#121331,secondary:#ffffff,tertiary:#A1F1F0"
            style="width:40px;height:40px"
            @click="removeMeal"
        >
            
        </lord-icon>

        
    </div>
</template>