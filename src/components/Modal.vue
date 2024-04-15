<script setup>
import { ref, defineProps, onMounted } from 'vue';

const props = defineProps({
  isOpen: Boolean
})

const emit = defineEmits(['close']);

const modalVisible = ref(false)

onMounted(() => {
  if (props.isOpen) {
    document.getElementById('my_modal_1').showModal();
  }
})

const closeModal = () => {
  modalVisible.value = false;
  emit('close');
};

</script>

<template>
    <dialog id="my_modal_1" class="modal">
    <div class="modal-box">
        <h3 class="font-bold text-lg">Hello!</h3>
        <p class="py-4">Press ESC key or click the button below to close</p>
        <div class="modal-action">
        <form method="dialog">
            <!-- if there is a button in form, it will close the modal -->
            <button class="btn" @click="closeModal">Close</button>
        </form>
        </div>
    </div>
    </dialog>
</template>