<script setup>
import axios from 'axios';
import {reactive, onMounted} from 'vue';

const emit = defineEmits(['close']);

const state = reactive({
    dates: []
});

const fetchDates = async() =>
{
    try{
        const date = await axios.get('/api/dates');
        state.dates = date.data;
    } catch (error) {
        console.error('Błąd wczytywania dat:', error);
    }
}

onMounted(fetchDates);

const handleConfirm = () => {
    // Here you can add logic for the reservation itself
    emit('close'); // Tell the parent component to close the popup
}
</script>

<template>
<div class="bg-gray-600/20 backdrop-blur-3xl backdrop-opacity-40 w-60 h-[300px] rounded-xl border border-gray-900 flex flex-col justify-center items-center p-4">
    <h2 class="text-white text-center mb-8">Czy potwierdzasz wykonanie rezerwacji na ten dzień?</h2>
    <div class="card">
        <button @click="handleConfirm">Potwierdź</button>
    </div>
</div>
</template>

<style scoped>
.card
{
    width: 130px;
    height: 60px;
    background-color: rgb(56, 56, 56);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
}
.card button{
    color: white;
    font-size: large;
    font-family: inherit;
    z-index: 2;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    border: none;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: auto;
    margin-right: auto;

}
.card::before
{
    content: "";
    position: absolute;
    width: 250px;
    height: 140px;
    background: linear-gradient(180deg, #000000, #FFFFFF);
    animation: rotate 5s linear infinite;
}
@keyframes rotate{
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
}

.card::after
{
    content: "";
    position: absolute;
    inset: 5px;
    background-color: rgb(56, 56, 56);
    border-radius: 10px;
    
}
</style>