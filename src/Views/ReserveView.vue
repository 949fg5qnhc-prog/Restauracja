<script setup>
import axios from 'axios';
import {reactive, onMounted} from 'vue'
import DateTile from '@/components/DateTile.vue';

const state = reactive({
    dates: []
});

const fetchDates = async() =>
{
    try{
        const date = await axios.get('https://localhost/5001/');
    } catch (error) {
        console.error('Błąd wczytywania dat:', error);
    }
}
</script>

<template>
    <img src="/public/pexels-efrem-efre-2786187-16124818.jpg" class="blur-sm flex object-cover bg-no-repeat absolute" />

    <div class="bg-gray-700/40 backdrop-opacity-10 backdrop-blur-2xl inset-shadow-2xl inset-shadow-gray-300/25 relative w-160 h-48 mx-auto mt-12 rounded-md">
        <div class="grid grid-cols-7 gap-4">
            <DateTile />
        </div>
    </div>
</template>