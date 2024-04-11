<script setup>
    import { defineProps, inject} from 'vue';
    
    const counter = inject('count') // Junto Provide permite pasar información a un descendiente profundo
    const props = defineProps({
        modelValue: String
    });

    console.log(counter.value)
    
</script>
<!-- Esta es la forma de pasar información de hijo a padre
 -->
 <template>
    <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"/>
</template>