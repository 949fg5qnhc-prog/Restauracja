<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
    <div class="cont w-96 h-140 bg-gray-100/30 backdrop-invert backdrop-opacity-10 inset-shadow-3xl inset-shadow-white z-40 absolute top-45 right-100 rounded-2xl animate-bounce-in flex justify-center items-center">
        <div class="link-container grid grid-flow-col grid-rows-4 gap-5">
            <RouterLink to="/menu" class="nh row-span-1 w-80 h-16 bg-gray-500/20 backdrop-invert-sm backdrop-opacity-5 
            inset-shadow-gray-900/40 z-50 items-center text-center mx-auto my-3 py-3 clas rounded-md text-3xl
            transition delay-150 duration-300 ease-in-out hover:-translate-y-0.5 hover:translate-x-0.5 hover:bg-gray-400/25 hover:ring-2 hover:ring-gray-500/25">
                Menu
            </RouterLink>
            <RouterLink to="/book" class="nh row-span-1 w-80 h-16 bg-gray-500/20 backdrop-invert-sm backdrop-opacity-5 
            inset-shadow-gray-900/40 z-50 items-center text-center mx-auto my-3 py-3 clas rounded-md text-3xl
            transition delay-150 duration-300 ease-in-out hover:-translate-y-0.5 hover:translate-x-0.5 hover:bg-gray-400/25 hover:ring-2 hover:ring-gray-500/25">
                Zarezerwuj termin
            </RouterLink>
            <RouterLink to="/about" class="nh row-span-1 w-80 h-16 bg-gray-500/20 backdrop-invert-sm backdrop-opacity-5 
            inset-shadow-gray-900/40 z-30 items-center text-center mx-auto my-3 py-3 clas rounded-md text-3xl
            transition delay-150 duration-300 ease-in-out hover:-translate-y-0.5 hover:translate-x-0.5 hover:bg-gray-400/25 hover:ring-2 hover:ring-gray-500/25">
                Informacje i kontakt
            </RouterLink>
            <RouterLink to="/pictures" class="nh row-span-1 w-80 h-16 bg-gray-500/20 backdrop-invert-sm backdrop-opacity-5 
            inset-shadow-gray-900/40 z-20 items-center text-center mx-auto my-3 py-3 clas rounded-md text-3xl
            transition delay-150 duration-300 ease-in-out hover:-translate-y-0.5 hover:translate-x-0.5 hover:bg-gray-400/25 hover:ring-2 hover:ring-gray-500/25">
                Galeria
            </RouterLink>
        </div>
    </div>
</template>

<style lang="css" scoped>
.clas{
    font-family: 'Brush Script MT', cursive;

}


.animate-bounce-in {
    animation: bounce-in 2s ease;
}

@keyframes bounce-in {
    0% { transform: translate(150%, -100%); opacity: 0; scale: 150%; }
    25% { scale: 110%; }
    50% { transform: translate(-15px, 15px); opacity: 1; scale: 90%; }
    100% { transform: translate(0, 0); scale: 100%; }
}

.link-container:hover .nh:not(:hover) {
    filter: blur(2px);
    opacity: 0.5;
    transform: scale(0.95); 
    transition: all 0.3s ease-in-out;
}

</style>