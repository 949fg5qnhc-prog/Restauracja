<script setup>
import {defineProps} from 'vue'

const props = defineProps({
    menuItem: Object,
});
</script>

<template>
    <div class="grid grid-cols-2 gap-4">
        <div class="ft col-span-1 text-center text-3xl text-gray-300">{{menuItem.name}}</div>
        <div class="ft col-span-1"></div> 
        <div class="ft col-span-2 text-center text-gray-300 text-lg">{{'Składniki: ' + menuItem.ingredients }}</div>
        <div class="ft col-span-1 text-gray-300 text-sm text-shadow-sm text-center text-shadow-black"><i class="pi pi-clock" style="color:black; font-size:14px"></i>{{ 'Czas przygotowania: '+ menuItem.time + ' min'}}</div>
        <div class="ft col-span-1"></div>
        <div class="ft col-span-2 text-gray-300 text-sm text-shadow-sm text-center text-shadow-black">{{'Alergeny: ' + menuItem.allergens }}</div>

    </div>
</template>

<style scoped>
.ft
{
        font-family: 'Brush Script MT', cursive;

}
</style>