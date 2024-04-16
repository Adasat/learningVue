<script setup>
import { ref, watch } from 'vue';
import draggable from 'vuedraggable';
import Modal from '../components/Modal.vue'
import DraggableCard from '../components/DraggableCard.vue'

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



const showModal = (arr) => {
    arrayRef.value = arr;
    openModal.value = true
    console.log(arrayRef)
    

}

const closeModal = () => {
    openModal.value = false;
    console.log(openModal)
};

const updateArray = (newMeal) => {
    arrayRef.value.push(newMeal)
    openModal.value = false;
}

const removeElement = (meal) => {
    // Buscar y eliminar en meals
    if (meals.value.includes(meal)) {
        meals.value = meals.value.filter(m => m !== meal)
    }
    // Buscar y eliminar en yuckyMeals
    else if (yuckyMeals.value.includes(meal)) {
        yuckyMeals.value = yuckyMeals.value.filter(m => m !== meal)
    }
    // Buscar y eliminar en niFuniFaMeals
    else if (niFuniFaMeals.value.includes(meal)) {
        niFuniFaMeals.value = niFuniFaMeals.value.filter(m => m !== meal)
    }
};


</script>

<template>
    <div class="flex flex-wrap justify-evenly w-full gap-2"> 
        <div class=" w-1/4">
            <h1>Favorite Foods</h1>
            <draggable v-model="meals" tag="ul" itemKey="fav" group="meals" :animation="300" class="flex flex-col gap-2 min-h-72 p-2 bg-gray-600 rounded-t-lg">    
                <template #item="{ element: meal }" class="cursor-pointer">
                    <DraggableCard :meal="meal"  @removeElement="removeElement"/>
                </template>
            </draggable>
        <div v-if="meals.length < 5" class="bg-gray-500 p-2 rounded-b-lg cursor-pointer" @click="showModal(meals)">
                   <p class="ml-4 italic text-white">
                    + Add new Meal
                   </p>
            </div>

        </div>

        <div class=" w-1/4 ">
            <h1>Ni Fú ni Fa Meals</h1>

            <draggable v-model="niFuniFaMeals" tag="ul" group="meals" itemKey="nn" :animation="300" class="flex flex-col gap-2 min-h-72 p-2 bg-gray-600 rounded-t-lg">
                <template #item="{element: meal}" class="cursor-pointer">
                    <DraggableCard :meal="meal" @removeElement="removeElement"/>
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
                <DraggableCard :meal="meal"  @removeElement="removeElement"/>
              </template>
            </draggable>
             <div v-if="yuckyMeals.length < 5" class="bg-gray-500 p-2 rounded-b-lg cursor-pointer" @click="showModal(yuckyMeals)">
             <p class="ml-4 italic text-white">
                + Add new Meal
            </p>
        </div>
        </div>

    </div>

    <div v-if="openModal">
        <Modal isOpen="openModal" :arr="arrayRef" @updateArray="updateArray" :is-open="showModal" @close="closeModal"/>
    </div>
</template>