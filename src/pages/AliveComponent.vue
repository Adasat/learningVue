<script setup>
    import { ref, shallowRef } from 'vue';
import KeepMyCount from '../components/KeepMyCount.vue'
import BaseInput from '../components/BaseInput.vue'

const current = shallowRef(KeepMyCount)
</script>

<template>
    <div class="demo">
        <label class="mr-4"><input  type="radio" v-model="current" :value="KeepMyCount" /> A</label>
        <label><input type="radio" v-model="current" :value="BaseInput" /> B</label>
        <KeepAlive class="flex flex-col mt-4">
            <component :is="current"></component>
        </KeepAlive>
  </div>
</template>                                                                                                       