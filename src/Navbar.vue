<script setup>
import { ref, watch, onUnmounted } from 'vue';
import { useRoute, RouterLink } from 'vue-router'

const isActiveLink = (routePath) => {
  const route = useRoute();
  return route.path === routePath;
}
const isActiveNav = ref(false);

const closeMenu = () => {
  isActiveNav.value = false;
}

watch(isActiveNav, (val) => {
  if (val) {
    setTimeout(() => window.addEventListener('click', closeMenu), 1);
  } else {
    window.removeEventListener('click', closeMenu);
  }
});

onUnmounted(() => {
  window.removeEventListener('click', closeMenu);
});
</script>

<template>
    <i class="pi pi-align-justify hover:cursor-pointer" :class="[!isActiveNav ? 'text-6xl text-white absolute right-5 top-5 z-50' : 'not-shown']" @click="isActiveNav = !isActiveNav"></i>
    
    <Transition name="menu-anim">
        <div v-if="isActiveNav" class="mobile-menu" @click.stop> <RouterLink to="/" class="nav-l" :class="[isActiveLink('/') ? 'text-white' : 'text-gray-400']" @click="closeMenu">
                Strona Główna
            </RouterLink>
            <RouterLink to="/menu" class="nav-l" :class="[isActiveLink('/menu') ? 'text-white' : 'text-gray-400']" @click="closeMenu">
                Menu
            </RouterLink>
            <RouterLink to="/about" class="nav-l" :class="[isActiveLink('/about') ? 'text-white' : 'text-gray-400']" @click="closeMenu">
                Informacje
            </RouterLink>
            <RouterLink to="/book" class="nav-l" :class="[isActiveLink('/book') ? 'text-white' : 'text-gray-400']" @click="closeMenu">
                Zarezerwuj
            </RouterLink>
        </div>
    </Transition>
</template>

<style scoped>
    .menu-anim-enter-active, .menu-anim-leave-active {
        transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease;
    }
    .menu-anim-enter-from, .menu-anim-leave-to {
        transform: translateX(100%); 
        opacity: 0;
    }
    .menu-anim-enter-to, .menu-anim-leave-from {
        transform: translateX(0); 
        opacity: 1;
    }

    .mobile-menu {
        display: flex;
        flex-direction: column;
        width: 80vw;
        height: 100vh;
        position: absolute;
        right: 0;
        top: 0;
        z-index: 1000;   
        clip-path: polygon(30% 0, 100% 0%, 100% 100%, 100% 100%);
        background-color: rgba(0, 0, 0, 0.95);
        padding-top: 6rem; 
        will-change: transform;
    }

    .not-shown {
        display: none;
    }
    
    
    .nav-l {
        position: relative;
        display: block;      
        width: 100%;        
        text-align: right;   
        padding: 1.5rem 4rem 1.5rem 0; 
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size: 24px;
        font-weight: bold;
        text-decoration: none;
        z-index: 1;
        transition: color 0.6s ease;
        border-bottom: 1px solid rgba(255,255,255,0.1); 
    }
    @media (max-width: 768px)
    {
        .nav-l
        {
            font-size: 20px;
            padding-right: 10px;
        }
        
    }
    .nav-l::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1; 
        background-color: #302543; 
        transform: translateX(100%); 
        transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);    
    }

    .nav-l:hover::before {
        transform: translateX(0);   
    }
    
    .nav-l:hover {
        color: white; 
        padding-right: 5rem; 
        transition: all 0.6s ease;
    }
    @media (max-width: 768px) {
        .nav-l:hover {
            padding-right: 1rem;
        }
    }
</style>