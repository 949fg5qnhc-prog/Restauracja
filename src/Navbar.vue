<script setup>
import {useRoute, useRouter, RouterLink} from 'vue-router'

const isActiveLink = (routePath) => {
  const route = useRoute();
  return route.path === routePath;
}
</script>

<template>
    <nav class="bg-gray-800 border-b border-gray-900">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div class="flex h-20 items-center justify-between">
                <div class="flex flex-1 items-right justify-right md:items-stretch md:justify-start">
                    <div class="md:ml-auto">
                        <div class="flex space-x-2">
                            <RouterLink to="/" :class="[isActiveLink('/') ? 'bg-gray-900' : 'hover:bg-gray-900 hover:text-white', 'text-white', 'px-3', 'py-2', 'rounded-md']">
                                Strona Główna
                            </RouterLink>
                            <RouterLink to="/menu" :class="[isActiveLink('/menu') ? 'bg-gray-900' : 'hover:bg-gray-900 hover:text-white', 'text-white', 'px-3', 'py-2', 'rounded-md']">
                                Menu
                            </RouterLink>
                            <RouterLink to="/about" :class="[isActiveLink('/about') ? 'bg-gray-900' : 'hover:bg-gray-900 hover:text-white', 'text-white', 'px-3', 'py-2', 'rounded-md']">
                                Informacje
                            </RouterLink>
                            <RouterLink to="/pictures" :class="[isActiveLink('/pictures') ? 'bg-gray-900' : 'hover:bg-gray-900 hover:text-white', 'text-white', 'px-3', 'py-2', 'rounded-md']">
                                Zdjęcia
                            </RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>