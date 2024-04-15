<script setup>
import { valueToPoint } from '@/utils';
import AxisLabel from './AxisLabel.vue'
import { computed } from 'vue'

const props = defineProps({
  stats: Array
})

const points = computed(() => {
  const total = props.stats.length
  return props.stats
    .map((stat, i) => {
      const { x, y } = valueToPoint(stat.value2, i, total)
      return `${x},${y}`
    })
    .join(' ')
})
</script>

<template>
  <g>
    <polygon  :points="points"  fill="#42b983" opacity="0.75"></polygon>
    <circle cx="100" cy="100" r="80" fill="transparent" stroke="#999"></circle>
    <axis-label
      v-for="(stat, index) in stats"
      :stat="stat"
      :index="index"
      :total="stats.length"
      
    
    >
    </axis-label>
  </g>
</template>