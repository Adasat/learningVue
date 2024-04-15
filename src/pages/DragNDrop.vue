<script setup>
import { ref, watch } from 'vue';
import draggable from 'vuedraggable';
import Modal from '../components/Modal.vue'

const meals = ref([
  'Hamburger',
  'Pizza',
  'Spaghetti',
  'Tacos',
  'Teriyaki Chicken',
]);

const yuckyMeals = ref([
  'Bat wing soup',
  'Spicy Octopus',
  'Anything from Taco Bell',
]);


const niFuniFaMeals = ref([
    'Soup'
])

const openModal = ref(false)
const arrayRef = ref([])


const addMeal = (meal, arr) => {
    if (!meals.value.includes(meal) && !niFuniFaMeals.value.includes(meal) && !yuckyMeals.value.includes(meal)) {
        arr.value.push(meal);
    }
}


watch(niFuniFaMeals, (newValue, oldValue) => { console.log('Nuevo valor:', newValue); console.log('Valor anterior:', oldValue); })

const showModal = (arr) => {
    arrayRef.value = arr
    openModal.value = true
}

const closeModal = () => {
    showModal.value = false;
};

</script>

<template>
    <div class="flex flex-wrap justify-evenly w-full gap-2"> 
        <div class=" w-1/4">
            <h1>Favorite Foods</h1>
            <draggable v-model="meals" tag="ul" itemKey="fav" group="meals" :animation="300" class="flex flex-col gap-2 min-h-72 p-2 bg-gray-600 rounded-t-lg">    
                <template #item="{ element: meal }" class="cursor-pointer">
                <div class="bg-white p-2 mb-4 cursor-pointer  rounded-md text-black">
                    <p>
        
                        {{ meal }}
                    </p>
                </div>
                </template>
            </draggable>
        <div v-if="meals.length < 5" class="bg-gray-500 p-2 rounded-b-lg cursor-pointer" @click="showModal(niFuniFaMeals)">
                   <p class="ml-4 italic text-white">
                    + Add new Meal
                   </p>
            </div>

        </div>

        <div class=" w-1/4 ">
            <h1>Ni Fú ni Fa Meals</h1>

            <draggable v-model="niFuniFaMeals" tag="ul" group="meals" itemKey="nn" :animation="300" class="flex flex-col gap-2 min-h-72 p-2 bg-gray-600 rounded-t-lg">
                <template #item="{element: meal}" class="cursor-pointer">
                    <div class="bg-white p-2 mb-4 cursor-pointer  rounded-md text-black">
                        <p>
            
                            {{ meal }}
                        </p>
                    </div>
                    

                </template>
                
            </draggable>
            <div v-if="niFuniFaMeals.length < 5" class="bg-gray-500 p-2 rounded-b-lg cursor-pointer" @click="showModal(niFuniFaMeals)">
                   <p class="ml-4 italic text-white">
                    + Add new Meal
                   </p>
            </div>
        </div>

        <div class=" w-1/4">
            <h1>Terrible Foods</h1>
            <draggable v-model="yuckyMeals" tag="ul" group="meals" itemKey="awful" :animation="300" class="flex flex-col gap-2  min-h-72 p-2 bg-gray-600 rounded-t-lg">
              <template #item="{ element: meal }" class="cursor-pointer">
                <div class="bg-white p-2 mb-4 cursor-pointer w-full rounded-md text-black">
                  <p>
          
                      {{ meal }}
                  </p>
              </div>
              </template>
            </draggable>
             <div v-if="yuckyMeals.length < 5" class="bg-gray-500 p-2 rounded-b-lg cursor-pointer" @click="()=>document.getElementById('my_modal_1').showModal()">
             <p class="ml-4 italic text-white">
                + Add new Meal
            </p>
        </div>
        </div>

    </div>

    <div v-if="openModal">
        <Modal :is-open="showModal" @close="closeModal"/>
    </div>
</template>