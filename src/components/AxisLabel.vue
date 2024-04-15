<script setup>
import { valueToPoint } from '@/utils.js';
import { computed } from 'vue'


const props = defineProps({
  stat: Object,
  index: Number,
  total: Number
})

const point = computed(() =>
  valueToPoint(+props.stat.value2 + 10, props.index, props.total)
)
</script>

<template>
  <text :x="point.x" :y="point.y" fill="green" >{{stat.corner}}</text>
</template>