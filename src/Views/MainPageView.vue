<script setup>
import MainHeader from '@/components/MainHeader.vue';
import FloatingMenu from '@/components/FloatingMenu.vue';
</script>

<template>
    <div class="relative min-h-screen fm">
        <div class="inset-0 bg-cover fixed bg-center blur-sm -z-10 h-full w-full" style="background-image: url('/public/pexels-efrem-efre-2786187-16124818.jpg');"></div>
        
        <MainHeader class="relative z-10" />
        <FloatingMenu class="z-10" />
        
    </div>
</template>

<style scoped>
.fm
{
    justify-content: center;
    align-items: center;
    
}

</style>