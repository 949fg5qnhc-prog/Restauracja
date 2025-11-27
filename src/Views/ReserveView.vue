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
  <img src="/public/pexels-efrem-efre-2786187-16124818.jpg" class="blur-sm flex object-cover bg-no-repeat absolute" />
  <div class="p-6 flex justify-center bg-gray-700/40 backdrop-opacity-10 backdrop-blur-2xl max-w-2xl mx-auto mt-12 rounded-3xl border-0">
    <div class="dl grid grid-cols-7 gap-4 auto-rows-[100px] max-w-2xl rounded-3xl">
      <div v-for="day in dates"
           :key="day.id"
           @click="!isFullyBooked(day) && showMenu(day)"
           class="border rounded-lg p-4 text-center w-[75px]"
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
    <BookPopupMenu :day="selectedDay" @close="hideMenu" @booking-confirmed="handleBookingConfirmed" />
  </div>
</template>


<style scoped>
.grid {
  grid-template-rows: repeat(auto-fill, minmax(100px, 1fr));
}
.user-icon
{
  padding: 0 2px;
  display: inline;
}
</style>