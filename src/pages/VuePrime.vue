<script setup>
import Editor from 'primevue/editor';
import Knob from 'primevue/knob';

import { ref } from 'vue';

import KnobCustom from '@/components/KnobCustom.vue'
const value = ref('')
const progressJS = ref(95)
const progressHTML = ref(90)
const progressCSS = ref(80)
</script>

<template>
    <h1>Componentes <a href="https://primevue.org/vite" target="_blank" class="text-blue-500 mb-10">Vue Prime</a></h1>
    <Editor v-model="value" editorStyle="height: 320px" class="bg-white" />
    <div class="flex flex-row gap-2 mt-10">
        <div class="flex flex-col gap-2 items-center">
            <Knob v-model="progressJS"  valueTemplate="{value}%" valueColor="green" rangeColor="MediumTurquoise" :min="0" :max="100" textColor="MediumTurquoise"/>
            <h1>Javascript</h1>
        </div>
        <div class="flex flex-col gap-2 items-center">
            <Knob v-model="progressHTML"  valueTemplate="{value}%" valueColor="green" rangeColor="MediumTurquoise" :min="0" :max="100" textColor="MediumTurquoise"/>
            <h1>HTML</h1>
        </div>
    º<KnobCustom tecn="CSS" :value="progressCSS" @update:value="val => progressCSS = val"/>


    </div>

</template>