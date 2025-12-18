<script setup>
import { ref, onMounted } from 'vue';
import BookPopupMenu from "@/components/BookPopupMenu.vue";
import axios from 'axios';

const dates = ref([]);
const isMenuVisible = ref(false);
const selectedDay = ref(null);

async function fetchData() {
  try {
    const response = await axios.get('http://localhost:5001/dates');

    const today = new Date();
    today.setHours(0, 0, 0, 0); 

    const thirtyDaysFromNow = new Date();
    thirtyDaysFromNow.setDate(today.getDate() + 30);

    const upcomingDates = response.data.filter(d => {
      const itemDate = new Date(d.year, getMonthIndex(d.month), d.day);
      
      return itemDate >= today && itemDate < thirtyDaysFromNow;
      
    });

    dates.value = upcomingDates.map(d => {
      const dateObj = new Date(d.year, getMonthIndex(d.month), d.day);
      const idx = getMonthIndex(d.month);
      if (idx === -1) console.warn(`Unknown month: ${d.month} for day ${d.day}`);
      const weekday = dateObj.toLocaleDateString("en-US", { weekday: "long" });
      return { ...d, weekday, shortWeekday: weekday.slice(0, 3) };
    });
  } catch (error) {
    console.error("Failed to fetch dates:", error);
  }
  
}

const isFullyBooked = (day) => {
  return day.remainingSlots.every(slot => !slot);
};

const showMenu = (day) => {
  selectedDay.value = day;
  isMenuVisible.value = true;
};

const hideMenu = () => {
  isMenuVisible.value = false;
  selectedDay.value = null;
}

const handleBookingConfirmed = () => {
  fetchData(); 
};

function getMonthIndex(monthName) {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return months.indexOf(monthName);
}

onMounted(() => {
  fetchData();
});
</script>

<template>
  <img src="/public/pexels-efrem-efre-2786187-16124818.jpg" class="blur-sm fixed inset-0 w-full h-full object-cover -z-10" />
  <h1 :class="[isMenuVisible ? 'nn' : '']">Wybierz datę rezerwacji z kalendarza ponizej</h1>
  <div class="cont p-6 flex justify-center bg-gray-700/40 backdrop-opacity-10 backdrop-blur-2xl w-full max-w-2xl mx-auto mt-2 rounded-3xl border-0">
    <div class="dl flex flex-wrap justify-center gap-4 w-full rounded-3xl">
      <div v-for="day in dates"
           :key="day.id"
           @click="!isFullyBooked(day) && showMenu(day)"
           class="cell border rounded-lg p-4 text-center w-full sm:w-[calc((100%_-_3rem)/4)] md:w-[calc((100%_-_6rem)/7)] h-[100px] day"
           :class="{
             'bg-gray-300/65 backdrop-blur-lg backdrop-opacity-30 cursor-pointer hover:scale-[1.1]': !isFullyBooked(day),
             'bg-gray-500/50 cursor-not-allowed': isFullyBooked(day)
           }">
        <div class="font-bold text-xl">{{ day.day }}</div>
        <div class="text-sm text-gray-600">{{ day.shortWeekday }}</div>
        <div class="flex justify-center">
          <div v-for="(isSlotAvailable, index) in day.remainingSlots" :key="index" class="pi pi-user user-icon" :style="{ color: isSlotAvailable ? 'green' : 'red' }" />
        </div>
      </div>
    </div>
  </div>
  <div v-if="isMenuVisible" class="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center">
    <BookPopupMenu class = "z-1000" :day="selectedDay" @close="hideMenu" @booking-confirmed="handleBookingConfirmed" />
  </div>
</template>


<style scoped>
  .nn
  {
    opacity: 0;
    animation: none;
    transition: opacity 0.3s ease;
  }
.grid {
  grid-template-rows: repeat(auto-fill, minmax(100px, 1fr));
}
.user-icon
{
  padding: 0 2px;
  display: inline;
}
.cont {
  animation: enter 1.2s ease;
}

@media (max-width: 768px) {
  .cont{
    width: 65vw;
    align-items: center;
    justify-content: center;
  }
  h1{
    margin-top: 3rem;
  }
  .cell{
    width: 50%;
  }
}

@keyframes enter
{
  0% {opacity: 0;}
  100% {opacity: 1 }
}
h1
{
  text-align:center;
  color: white;
  position: relative;
  z-index: 500;
  font-family: 'Brush Script MT';
  font-size: 3rem;
  opacity: 0;
  animation: pixel-load 1.2s forwards;
  pointer-events: none;
}
@media (max-width: 768px) {
  h1 {
    font-size: 2rem;
    padding: 0 1rem;
  }
}
h1:hover
{
  cursor: default;
}
@keyframes pixel-load {
  0% {
    opacity: 0;
    transform: scale(0.8);      
    filter: blur(8px);          
  }
  100% {
    opacity: 1;
    transform: scale(1);        
    filter: blur(0px);          
  }
}
</style>