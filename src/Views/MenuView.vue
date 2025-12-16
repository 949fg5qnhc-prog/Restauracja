<script setup>
import MenuItem from '@/components/MenuItem.vue'
import axios from 'axios'
import { onMounted, reactive, ref } from 'vue';
import { useRoute } from 'vue-router';
import Carousel from 'primevue/carousel';

const route = useRoute();

const state = reactive({
    items: []
});

const selectedItem = ref(null);

const toggleItemAnimation = (item) => {
    if (window.innerWidth >= 768) {
        item.isActive = !item.isActive;
    }
};


const fetchItems = async () => {
    try {
        const response = await axios.get('http://localhost:5001/menuitems');
        
        state.items = response.data.map(item => ({
            ...item,
            isActive: false 
        }));
        
    } catch (error) {
        console.error('Błąd wczytywania pozycji z menu:', error);
    }
};

const toggleBigMenu = (item) => {
    selectedItem.value = item;
}

onMounted(fetchItems);
</script>

<template>
    <div class="relative w-full min-h-screen overflow-x-hidden">
        
        <img src="/public/pexels-efrem-efre-2786187-16124818.jpg" class="fixed inset-0 w-full h-full blur-sm object-cover -z-10" />
<!--
        <div class="background-opacity-10 inset-shadow-3xl inset-shadow-amber-300/30 min-h-screen flex flex-col justify-center py-8">
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-4 md:p-0 max-w-7xl mx-auto w-full">
                <div 
                    v-for="item in state.items" 
                    :key="item.id"
                    @click="toggleItemAnimation(item)"
                    class="ent col-span-1 bg-gray-500/20 backdrop-blur-lg rounded-2xl mx-0 md:mx-4 mt-2 h-64 cursor-pointer z-30"
                    :class="{ [item.animation]: item.isActive }"
                    :style="{ 
                        transition: item.isActive 
                            ? 'all 300ms ease-in-out' 
                            : 'all 300ms ease-in-out, z-index 0ms 300ms' 
                    }"
                >
                    <MenuItem :menuItem="item"></MenuItem>
                </div>
            </div>    
        </div>
    -->
        <div class="relative flex justify-center items-start p-4 max-w-7xl mx-auto mt-8">
            <div class="w-full max-w-md mx-auto">
                <Carousel :value="state.items" :numVisible="1" :numScroll="1" orientation="vertical" verticalViewPortHeight="330px" containerClass="flex flex-col items-center">
                    <template #item="slotProps">
                        <div class="border border-surface-200 rounded-md m-2 p-4 cursor-pointer bg-black/40 backdrop-blur-sm hover:bg-black/60 transition-colors" @click="toggleBigMenu(slotProps.data)">
                            <div class="mb-4">
                                <div class="relative mx-auto">
                                    <img :src="slotProps.data.url" :alt="slotProps.data.name" class="w-full h-48 object-cover rounded" />
                                </div>
                            </div>
                            <div class="mb-4 font-medium">{{ slotProps.data.name }}</div>
                            <div class="flex justify-between items-center">
                                <div class="mt-0 font-semibold text-xl"><i class="pi pi-clock"></i> {{ slotProps.data.time + ' min'}}</div>
                            </div>
                        </div>
                    </template>
                </Carousel>
            </div>

            <div v-if="selectedItem" class="fixed inset-0 z-50 flex justify-center items-center bg-black/60 backdrop-blur-sm" @click.self="selectedItem = null">
                <div class="ent w-full max-w-2xl flex flex-col items-center justify-center min-h-[50vh] p-8 bg-black/70 backdrop-blur-md rounded-xl cursor-pointer border border-gray-700 shadow-2xl" @click="selectedItem = null">
                <div class="w-full max-w-2xl">
                    <div class="mb-8 flex justify-center h-full w-full">
                        <img :src="selectedItem.url" :alt="selectedItem.name" class="w-full max-w-md rounded-xl shadow-2xl" />
                    </div>
                    <MenuItem :menuItem="selectedItem"></MenuItem>
                    <div class="mt-8 text-center text-gray-400 text-sm">(Kliknij, aby zamknąć)</div>
                </div>
            </div>
        </div>

        
    </div>
    </div>
</template>

<style scoped>

.ent {
    animation: tilt-in-fwd-tr 0.4s cubic-bezier(0.950, 0.960, 0.950, 0.940) both;
}

@keyframes tilt-in-fwd-tr {
  0% {
    transform:  translateY(-100px) scale(0.5) ;
    opacity: 0;
  }
  100% {
    transform: translate(0, 0) scale(1);
    opacity: 1;
  }
}

:deep(.p-carousel-prev-button),
:deep(.p-carousel-next-button) {
    background-color: rgba(0, 0, 0, 0.3) !important;
    color: #ffffff !important;
    border: 1px solid rgba(255, 255, 255, 0.8) !important;
    
    width: 2.5rem;
    height: 2rem;
    transition: background-color 0.2s, border-color 0.2s;
}

:deep(.p-carousel-prev-button:hover),
:deep(.p-carousel-next-button:hover) {
    background-color: rgba(0, 0, 0, 0.8) !important;
    border-color: rgba(255, 255, 255, 0.5) !important;
}
</style>