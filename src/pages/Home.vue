<script setup>

import { onMounted, ref, reactive, provide } from 'vue';
import BaseCard from '@/components/BaseCard.vue';
import { useRouter, useRoute } from 'vue-router'
import BaseButton from '@/components/BaseButton.vue'
const router = useRouter()


const memes = ref([]) // Constante reactiva --> Es un objeto que su value es reactivo.ç
let allMemes = []



const getAllMemes = async () => {
  const response = await fetch('https://api.imgflip.com/get_memes')
  const { data } = await response.json()

  memes.value = data.memes
  allMemes = data.memes
}

const searchMeme = (event) => {
  const value = event.target.value
  memes.value = allMemes.filter(meme => meme.name.toLowerCase().includes(value.toLowerCase()))
}

/* const toggleFav = (memeId) => {
    console.log(memeId)
  const index = favMemes.value.indexOf(memeId.id);
  if (index >= 0) {
    // Si el meme ya está en la lista, quítalo
    favMemes.value.splice(index, 1);
  } else {
    // Si el meme no está en la lista, añádelo
    favMemes.value.push(memeId);
  }

  console.log(favMemes.value)
};
*/

getAllMemes()





</script>


<template>
  <div class="flex flex-col items-center">
    <div class="flex flex-row justify-between w-full">
      <input type="text" placeholder="Search meme..." class="input input-bordered w-full max-w-xs mb-4 bg-white placeholder-pink-400" v-on:input="searchMeme" />
      <BaseButton path="/favorites">
        Favs
      </BaseButton>
    </div>
    <section class="flex flex-wrap gap-4 mt-2 ">
      <BaseCard v-for="meme in memes" :key="meme.id" :meme="meme" />
     
    </section> 

    
  </div>

</template>