<script setup>
import { ref, computed, reactive , watch} from 'vue';
import Polygraph from './Polygraph.vue';
    let counter = ref(0)

    const stats = reactive([
        {corner: '1', value2: 100},
        {corner: 'H', value2: 35},
        {corner: '2', value2: 100},
        {corner: 'E', value2: 35},
        {corner: '3', value2: 100},
        {corner: 'L', value2: 35},
        {corner: '4', value2: 100},
        {corner: 'L', value2: 35},
        {corner: '5', value2: 100},
        {corner: 'O', value2: 35},
        {corner: '6', value2: 100},
        {corner: 'W', value2: 35},
        {corner: '7', value2: 100},
        {corner: 'O', value2: 35},
        {corner: '8', value2: 100},
        {corner: 'R', value2: 35},
        {corner: '9', value2: 100},
         {corner: 'L', value2: 35},
        {corner: '10', value2: 100},
        {corner: 'D', value2: 35},
    ])

    let newStat = ref({
        corner: '',
        value2: 0  // Esta es la propiedad para el valor numérico, no debe confundirse con newStat.value.
    });

    const sumCounter = () => {
        counter.value += 1
    }

    const addNewStat = (e) => {
        e.preventDefault();
        
        console.log("newStat.value before error:", newStat.value);

        console.log('CORNER ' , newStat.value.corner)
    // Asegúrate de que la nueva etiqueta tenga un rincón y no esté ya en las estadísticas
     if (newStat.value.corner && !stats.some(stat => stat.corner === newStat.value.corner)) {
        console.log("Adding new stat:", newStat.value);
        stats.push({...newStat.value, value2: parseInt(newStat.value.value2)});
        newStat.value = { corner: '', value2: 0 }; // Reset after adding
        console.log("newStat reset to:", newStat.value);
    }
}

    const removeStat = (stat) => {
        if (stats.length > 3) {
            stats.splice(stats.indexOf(stat), 1)
        } else {
            alert("Can't delete more. We need minimum 3")
        }
    }

    console.log("Current newStat.value:", newStat.value);
    watch(() => newStat.value.value2, (newValue, oldValue) => {
        if (newValue < 0) newStat.value.value2 = 0;
        if (newValue > 100) newStat.value.value2 = 100;
        
    });

    watch(() => newStat.value.corner, (newValue, oldValue) => {
       console.log(newValue.length)
        if(newValue.length > 0 && !stats.includes(newValue.at(-1).toUpperCase())) {
            
            newStat.value.corner = newValue.at(-1).toUpperCase()
        }
    })

</script>

<template>
    <div class="flex flex-col items-center w-32 bg-white p-4 text-black rounded-md ">
        <div class="flex flex-row gap-4 pb-2">
            <p>Count: </p>
            <p>{{ counter }}</p>
        </div>
        <button @click="sumCounter" class="bg-gray-300 p-1 w-1/2 rounded-sm text-sm">
            +1 
        </button>
    </div>
    <div class="mt-10">
        <svg width="200" height="200" class="bg-gray-200 rounded-sm ">
            <Polygraph :stats="stats"  ></Polygraph>
        </svg>
    </div>

     <div v-for="stat in stats">
    <label>{{stat.corner}}</label>
    <input type="range" v-model="stat.value2" min="0" max="100">
    <span>{{stat.value2}}</span>
    <button @click="removeStat(stat)" aria-label="Remove" class="bg-white p-1 my-1 text-red-700 ml-2">X</button>
    </div>
    <div>
        <form  class="flex flex-col w-1/2 gap-2 mt-10">
            <div class="flex gap-3 ">
                <input name="newStat" placeholder="Add value (0 a 100)"  min="0" :max="100"  v-model.number="newStat.value2" type="number"  class="w-1/2 p-1">
                <input name="newCorner" placeholder="Add axis's name" v-model="newStat.corner" class="w-1/2 p-1">
                
            </div>
          
            <button @click="addNewStat" class="bg-blue-400 w-1/3 self-end p-2 text-black rounded-md hover:bg-blue-900 hover:text-white ">Add New Axis</button>
        </form>

    </div>

</template>