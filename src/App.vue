<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import { onMounted, ref } from 'vue';


const memes = ref([]) // Constante reactiva --> Es un objeto que su value es reactivo.

const getAllMemes = async () => {
  const response = await fetch('https://api.imgflip.com/get_memes')
  const { data } = await response.json()

  console.log(data)
  memes.value = data.memes
}
getAllMemes()

onMounted(() => { //Esto es un ciclo de vida
  console.log('componente montado')
})
</script>

<!-- <script>
export default {
  setup() {
    import HelloWorld from './components/HelloWorld.vue'
    import TheWelcome from './components/TheWelcome.vue'
  }
}
</script> -->

<template>
  <header>

    <div class="wrapper">
      <div v-for="meme in memes" :key="meme.id" class="card">
        <img :src="meme.url" />
        <h1>{{meme.name}}</h1>
    
      </div>
    </div>
  </header>

  <main>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.card {
  background-color: white;
  display: flex;
  flex-direction: column;

  width: 40px;
  height: 60px;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
