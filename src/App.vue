<script setup>

import { computed, onMounted, ref } from 'vue';
import HeartIcon from './components/HeartIcon.vue';
import BaseCard from './components/BaseCard.vue';


const memes = ref([]) // Constante reactiva --> Es un objeto que su value es reactivo.ç
const favMemes = ref([])
let allMemes = []

const updatedMemes = computed(() => {
  return allMemes.map(meme => ({
    ...meme,
    isFav: favMemes.value.includes(meme.id)
  }));
});

const getAllMemes = async () => {
  const response = await fetch('https://api.imgflip.com/get_memes')
  const { data } = await response.json()

  console.log(data)
  memes.value = data.memes
  allMemes = data.memes
}

const searchMeme = (event) => {
  const value = event.target.value
  memes.value = allMemes.filter(meme => meme.name.toLowerCase().includes(value.toLowerCase()))
}

const toggleFav = (memeId) => {
  const index = favMemes.value.indexOf(memeId);
  if (index >= 0) {
    // Si el meme ya está en la lista, quítalo
    favMemes.value.splice(index, 1);
  } else {
    // Si el meme no está en la lista, añádelo
    favMemes.value.push(memeId);
  }

  console.log(favMemes.value)
};


getAllMemes()

const checkIsFav = (memeId) => {
  console.log(favMemes.value.includes(memeId))
  return favMemes.value.includes(memeId);
};

onMounted(() => { //Esto es un ciclo de vida
  console.log('componente montado')
})
</script>


<template>
  <div class="flex flex-col items-center">
    <input type="text" placeholder="Search meme..." class="input input-bordered w-full max-w-xs mb-4" v-on:input="searchMeme" />
    <section class="container mt-2 ">
      <BaseCard v-for="meme in updatedMemes" :key="meme.id" :meme="meme" :fav="toggleFav" :isFav="checkIsFav(meme.id)"/>
     
    </section> 


  </div>

</template>

<style scoped> /* Scope es estilo propio del componente */


.base-input {
  padding: 5px 8px;
  margin-bottom: 10px;
}

.icon {
  width: 20px;
  height: 30px;
}

.icon.selected {
  color: red;
}

.card {
  display: flex;
  flex-direction: column;
  width: 20%;
  gap: 10px;
  justify-content: space-between;
  text-align: center;
  color: black;
  padding: 10px;
  border-radius: 10px;
}
.container {
    display: flex;
    flex-wrap: wrap;
    max-width: 100vw;
    gap: 40px
  }


</style>
