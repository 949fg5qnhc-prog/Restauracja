<script setup>
import MenuItem from '@/components/MenuItem.vue'
import axios from 'axios'
import { onMounted, reactive, computed, watch} from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const state = reactive({
    items: []
});

const fetchItems = async () => {
    try {
        const response = await axios.get('http://localhost:5001/menuitems');
        state.items = response.data;
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
                class="col-span-1 bg-gray-500/20 backdrop-blur-lg rounded-2xl mx-4 mt-2 h-64 transition delay-150 duration-300 ease-in-out hover:scale-200 hover:z-50"
                :class="item.animation">
                    <MenuItem :menuItem="item" ></MenuItem>
                </div>
            </div>
            
        </div>
</template>