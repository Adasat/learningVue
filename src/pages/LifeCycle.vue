<script setup>
import { onBeforeMount, onMounted, onUnmounted, computed, ref, watch, TransitionGroup } from 'vue';
import gsap from 'gsap'

const character = ref([])
let counter = ref(1)
const query = ref('')

onBeforeMount(() => {
      console.log('Esta llamada se hace antes de montar el componente')
      /* 
        Usos:
            1- Configuración Inicial o Preparación: Por ejemplo inicializar variables o estados que no dependan del DOM
            2- Iniciar Subscripciones o Eventos: Que no tengan dependencia del DOM (cancelar en onUnmounted)
            3- Cálculos o Lógica no Dependiente del DOM: Preparar datos que pasarán a hijos o calcular valores que se van a usar.
            4 - Logs de Depuración: Colocar Logs que ayuden a entender el flujo de la aplicación.
      */
    const timerCounter = setInterval(() => {
        counter.value += 1
    }, 1000);

    onUnmounted(() => {
    clearInterval(timerCounter); // Limpiar el intervalo cuando el componente se desmonte
  });
})

onMounted(() => {
    console.log('Montado el componente. Por lógica la petición se hace en este momento')
    const getAllCharacter = async () => {
    const response = await fetch(' https://rickandmortyapi.com/api/character')
    const { results } = await response.json()
    
    character.value = results

    console.log(results)
  }

  getAllCharacter()
})

function onBeforeEnter(el) {
  el.style.opacity = 0
  el.style.height = 0
}

function onEnter(el, done) {
  gsap.to(el, {
    opacity: 1,
    height: '1.6em',
    delay: el.dataset.index * 0.08,
    onComplete: done
  })
}

function onLeave(el, done) {
  gsap.to(el, {
    opacity: 0,
    height: 0,
    delay: el.dataset.index * 0.10,
    onComplete: done
  })
}

const computedList = computed(() => {
  return character.value.filter((item) => item.name.toLowerCase().includes(query.value.toLowerCase()))
})

</script>

<template>
    <div>
        <p>COUNTER</p>
        <p>{{ counter }}</p>
    </div>
    <input v-model="query" class="mb-12"/>

    <section class="flex flex-wrap gap-4">
      <TransitionGroup
        tag="ul"
        :css="false"
        @before-enter="onBeforeEnter"
        @enter="onEnter"
        @leave="onLeave"
      >
        
        <li v-for="(jerry, index) in computedList" :key="jerry.id" :data-index="index" class="flex flex-row items-center py-6 gap-2 text-lg  text-center rounded-full   ">
          <p>{{ jerry.name }}</p>
          <img :src="jerry.image" class="w-10 rounded-full mb-4"/>
        </li>
      </TransitionGroup>
    </section>
</template>
