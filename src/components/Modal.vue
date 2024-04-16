<script setup>
import { ref, defineProps, onMounted, watch } from 'vue';

const props = defineProps({
  isOpen: Boolean,
  arr: Array
})

const newMeal = ref('');

const emit = defineEmits(['close', 'updateArray']);

const modalVisible = ref(false)

onMounted(() => {
  if (props.isOpen) {
    document.getElementById('my_modal_1').showModal();
  }
  
})

const closeModalBTN = () => {
  emit('close');
  modalVisible.value = false;
};

const addMeal = () => {
   if (newMeal.value.trim() && !props.arr.includes(newMeal.value.trim())) {
    emit('updateArray', newMeal.value.trim())
    newMeal.value = ''
    modalVisible.value = false;
  }
}


</script>

<template>
    <dialog id="my_modal_1" class="modal ">
    <div class="modal-box  bg-yellow-400 text-black">
        <p class="py-4">What dish do you want to add?</p>
        <input placeholder="dish's name" v-model="newMeal" class="pl-4 py-1 bg-blue-600 text-white rounded-md focus:border-yellow-400 focus:border-2 focus:bg-blue-200 focus:text-blue-950 focus:font-bold"/>
        <div class="modal-action">
        <form method="dialog">
            <button class="btn bg-blue-400 text-black mr-4 hover:bg-green-700" @click="addMeal">Add Meal</button>

            <button class="btn bg-red-600 text-black hover:bg-red-300" @click="closeModalBTN">Close Modal</button>
        </form>
        </div>
    </div>
    </dialog>
</template>