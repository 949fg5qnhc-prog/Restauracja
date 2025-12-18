<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useToast } from 'vue-toastification';
import FloatLabel from 'primevue/floatlabel';
import InputText from 'primevue/inputtext';

const toast = useToast();
const email = ref('');
const userData = ref([]);

const props = defineProps({
  day: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['close', 'booking-confirmed']);

const selectedHourIndex = ref(null);

const handleConfirm = async () => {
    if (selectedHourIndex.value === null) {
        alert('Proszę wybrać godzinę przed potwierdzeniem.');
        return;
    }

    if (!email.value || !email.value.includes('@')) {
        toast.error('Proszę podać adres email.');
        return;
    }

    const newRemainingSlots = [...props.day.remainingSlots];
    newRemainingSlots[selectedHourIndex.value] = false;

    try {
        await axios.patch(`http://localhost:5001/dates/${props.day.id}`, {
            remainingSlots: newRemainingSlots
        });
        await axios.post('http://localhost:5001/users', {
            email: email.value,
            day: props.day.day,
            month: props.day.month,
            hour: props.day.hours[selectedHourIndex.value]
        });

        toast.success('Rezerwacja została potwierdzona!');
        emit('booking-confirmed');
        emit('close'); 
    } catch (error) {
        console.error('Nie udało się zaktualizować rezerwacji:', error);
        alert('Wystąpił błąd podczas rezerwacji. Spróbuj ponownie.');
        toast.error('Wystąpił błąd podczas rezerwacji. Spróbuj ponownie.');
    }
}
</script>

<template>
<div class="bg-gray-600/20 backdrop-blur-3xl backdrop-opacity-40 w-60 h-[350px] rounded-xl border border-gray-900 flex flex-col justify-center items-center p-4">
    <h2 class="text-white text-center mb-8">Rezerwacja na dzień: <br><strong>{{ day.day }} {{ day.month }}</strong></h2>
    <select  v-model="selectedHourIndex" class="py-3 bg-gray-900 text-white text-bold text-2xl mb-5 rounded-xl border border-gray-300">
        <option :value="null" disabled>Wybierz godzinę</option>
        <template v-for="(isAvailable, index) in day.remainingSlots">
            <option v-if="isAvailable" :key="index" :value="index">{{ day.hours[index] }}</option>
        </template>
    </select>
    <FloatLabel variant="on" class="w-full mb-6">
        <InputText id="on_label" v-model="email" autocomplete="off" class="w-full" required />
        <label for="on_label" class="text-gray-300">Email</label>
    </FloatLabel>

    <div class="card">
        <button @click="handleConfirm">Potwierdź</button>    
    </div>
    <div class="card2 mt-3">
        <button @click="emit('close')" style="cursor: pointer;">Anuluj</button>
    </div>
</div>
</template>

<style scoped>
input
{
    background-color: rgba(56, 56, 56, 0.6);
    border-radius: 10px;
    border: 1px solid rgba(188, 188, 188, 0.5);
    font-size: 1rem;
}

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
.card button:hover{
    cursor: pointer;
}
.card::before
{
    content: "";
    position: absolute;
    width: 200px;
    height: 140px;
    background: linear-gradient(180deg, #0ddd14, #848484);
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
    inset: 1px;
    background-color: rgb(56, 56, 56);
    border-radius: 10px;
    
}
.card:hover::after
{
    inset: 3px;
}
.card2
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
.card2 button{
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
.card2 button:hover{
    cursor: pointer;
}
.card2::before
{
    content: "";
    position: absolute;
    width: 250px;
    height: 140px;
    background: linear-gradient(180deg, #ee0404, #848484);
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

.card2::after
{
    content: "";
    position: absolute;
    inset: 1px;
    background-color: rgb(56, 56, 56);
    border-radius: 10px;
    
}
.card2:hover::after
{
    inset: 3px;
}
</style>