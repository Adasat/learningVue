<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';


    const currentPath = ref(window.location.pathname)
    const router = useRouter()

    console.log(currentPath.value)
</script>

<template>
    <div class="flex flex-col h-full space-between ">
        <header class="absolute top-0 left-0 flex items-center justify-between bg-gray-200 border-b-4 border-dotted border-b-black h-20 w-full mb-10 text-black">
            <p class="ml-4 text-xl ">Memelogín</p>
            <div class="flex gap-4 mr-4">
                <a :class="{ ' link link-accent': currentPath.value !== '/', 'link link-warning': currentPath.value === '/'}" @click="router.push({path: '/'})">Home</a>
                <a :class="{ 'link link-accent': currentPath.value !== '/favorites', 'link link-warning': currentPath.value === '/favorites'}" @click="router.push({path: '/favorites'})">Favorites</a>
                <a :class="{ 'link link-accent': currentPath.value !== '/mount', 'link link-warning': currentPath.value === '/mount'}" @click="router.push({path: '/mount'})">MOUNTy Pitón</a>
                <a :class="{ 'link link-accent': currentPath.value !== '/alive', 'link link-warning': currentPath.value === '/alive'}" @click="router.push({path: '/alive'})">Keep Alive</a>
                <a :class="{ 'link link-accent': currentPath.value !== '/draggable', 'link link-warning': currentPath.value === '/draggable'}" @click="router.push({path: '/draggable'})">Drop and Drag</a>

            </div>
        </header>
        <main class="my-28 px-10">
          <!-- Aquí irá el contenido de la página -->
          <router-view></router-view>
        </main>
        <!-- <footer class="fixed h-10 w-full bg-slate-500 bottom-0">
            <p>Footer to guapo</p>
        </footer> -->
    </div>
</template>