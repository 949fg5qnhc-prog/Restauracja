<script setup>
import { ref } from 'vue';
import BookPopupMenu from "@/components/BookPopupMenu.vue";

const year = 2025;
const month = 10; 

const daysInMonth = ref([]);

function generateDays(year, month) {
  // This function is correct, no changes needed here.
  const date = new Date(year, month, 1);
  const result = [];
  const options = { weekday: "long" };

  while (date.getMonth() === month) {
    result.push({
      date: date.getDate(),
      weekday: date.toLocaleDateString("en-US", options),
    });
    date.setDate(date.getDate() + 1);
  }
  return result;
}

// State to control menu visibility
const isMenuVisible = ref(false);

const showMenu = () => {
  isMenuVisible.value = true;
};

const hideMenu = () => {
  isMenuVisible.value = false;
}

daysInMonth.value = generateDays(year, month);
</script>

<template>
  <img src="/public/pexels-efrem-efre-2786187-16124818.jpg" class="blur-sm flex object-cover bg-no-repeat absolute" />
  <div class="p-6 flex justify-center bg-gray-700/40 backdrop-opacity-10 backdrop-blur-2xl max-w-2xl mx-auto mt-12 rounded-3xl border-0">
    <div class="dl grid grid-cols-7 gap-4 auto-rows-[100px] max-w-2xl rounded-3xl">
      <div v-for="(day, index) in daysInMonth" :key="index" @click="showMenu" class="border rounded-lg p-4 text-center bg-gray-300/65 backdrop-blur-lg backdrop-opacity-30 w-[75px] cursor-pointer">
        <div class="font-bold text-xl">{{ day.date }}</div>
        <div class="text-sm text-gray-600">{{ (day.weekday).slice(0,3) }}</div>
        <i class="pi pi-user" style="color: green" />
      </div>
    </div>
  </div>
  <!-- Modal Overlay -->
  <div v-if="isMenuVisible" class="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center">
    <BookPopupMenu @close="hideMenu" />
  </div>
</template>


<style scoped>
.grid {
  grid-template-rows: repeat(auto-fill, minmax(100px, 1fr));
}
</style>