<script setup>
import MenuItem from '@/components/MenuItem.vue'
import axios from 'axios'
import { onMounted, reactive } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const state = reactive({
    items: []
});

const toggleItemAnimation = (item) => {
    item.isActive = !item.isActive;
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

onMounted(fetchItems);
</script>

<template>
    <img src="/public/pexels-efrem-efre-2786187-16124818.jpg" class="blur-sm flex object-cover bg-no-repeat absolute" />

    <div class="background-opacity-10 inset-shadow-3xl inset-shadow-amber-300/30 h-140">
        <div class="grid grid-cols-3 gap-5">
            <div 
                v-for="item in state.items" 
                :key="item.id"
                @click="toggleItemAnimation(item)"
                class="col-span-1 bg-gray-500/20 backdrop-blur-lg rounded-2xl mx-4 mt-2 h-64 cursor-pointer z-30"
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
</template>