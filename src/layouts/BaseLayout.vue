<template>
    <div class="flex flex-col h-full space-between ">
        <header class="absolute top-0  left-0 flex items-center bg-gray-200 border-b-4 border-dotted border-b-black h-20 w-full mb-10 text-black">
            <p class="ml-4 text-xl ">Memelogín</p>
        </header>
        <main>
          <!-- Aquí irá el contenido de la página -->
          <router-view></router-view>
        </main>
        <footer><!-- Pie de página --></footer>

    </div>
</template>