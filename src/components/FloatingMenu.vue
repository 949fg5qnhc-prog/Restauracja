<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="w-96 h-140 bg-gray-100/30 backdrop-invert backdrop-opacity-10 inset-shadow-3xl inset-shadow-white z-40 relative mx-auto mt-12">
        <div class="grid grid-flow-col grid-rows-4 gap-5">
            <RouterLink to="/menu" class="row-span-1 w-80 h-12 bg-gray-300/25 backdrop-invert-sm backdrop-opacity-5 inset-shadow-gray-900/40 z-50 items-center text-center mx-auto my-3 py-3 clas rounded-md text-2xl">
                Menu
            </RouterLink>
            <RouterLink to="/reserve" class="row-span-1 w-80 h-12 bg-gray-300/25 backdrop-invert-sm backdrop-opacity-5 inset-shadow-gray-900/40 z-50 items-center text-center mx-auto my-3 py-3 clas rounded-md text-2xl">
                Zarezerwuj termin
            </RouterLink>
            <RouterLink to="/about" class="row-span-1 w-80 h-12 bg-gray-300/25 backdrop-invert-sm backdrop-opacity-5 inset-shadow-gray-900/40 z-50 items-center text-center mx-auto my-3 py-3 clas rounded-md text-2xl">
                Informacje i kontakt
            </RouterLink>
            <RouterLink to="/pictures" class="row-span-1 w-80 h-12 bg-gray-300/25 backdrop-invert-sm backdrop-opacity-5 inset-shadow-gray-900/40 z-50 items-center text-center mx-auto my-3 py-3 clas rounded-md text-2xl">
                Galeria
            </RouterLink>
        </div>
    </div>
</template>

<style lang="css" scoped>
.clas{
    font-family: 'Brush Script MT', cursive;

}
</style>