<script setup>
import { defineProps } from 'vue';
import Knob from 'primevue/knob';

const props = defineProps({
    tecn: String,
    value: Number

})
</script>

<template>
    <div class="flex flex-col gap-2 items-center">
        <Knob :value="props.value" @input="$emit('update:value', $event)" valueTemplate="{value}%" valueColor="green" rangeColor="MediumTurquoise" :min="0" :max="100" textColor="MediumTurquoise"/>
        <h1>{{tecn}}</h1>
    </div>

</template>