<script setup>
import MainHeader from '@/components/MainHeader.vue';
import FloatingMenu from '@/components/FloatingMenu.vue';
</script>

<template>
    <div class="relative min-h-screen">
        <div class="absolute inset-0 bg-cover bg-center blur-sm -z-10" style="background-image: url('/public/pexels-efrem-efre-2786187-16124818.jpg');"></div>
        
        <MainHeader class="relative z-10" />
        <FloatingMenu class="relative z-10" />
    </div>
</template>