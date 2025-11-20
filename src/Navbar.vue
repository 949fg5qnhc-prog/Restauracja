<script setup>
import {useRoute, useRouter, RouterLink} from 'vue-router'

const isActiveLink = (routePath) => {
  const route = useRoute();
  return route.path === routePath;
}
</script>

<template>
    <nav class="bg-gray-800 border-b border-gray-900">
        <div class="mx-auto max-w-dvw px-2 sm:px-2 lg:px-4">
            <div class="flex h-20 items-center justify-between">
                <div class="flex flex-1 items-right justify-right md:items-stretch md:justify-start">
                    <div class="md:mx-auto">
                        <div class="flex space-x-2">
                            <RouterLink to="/" :class="[isActiveLink('/') ? 'bg-gray-900 ring-2 ring-orange-600/45' : 'hover:bg-gray-900 hover:text-white', 'text-white', 'px-3', 'py-2', 'rounded-md', 'transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:translate-x-0.5 hover:bg-orange-600']">
                                Strona Główna
                            </RouterLink>
                            <RouterLink to="/menu" :class="[isActiveLink('/menu') ? 'bg-gray-900 ring-2 ring-orange-600/45' : 'hover:bg-gray-900 hover:text-white', 'text-white', 'px-3', 'py-2', 'rounded-md', 'transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:translate-x-0.5 hover:bg-orange-600']">
                                Menu
                            </RouterLink>
                            <RouterLink to="/about" :class="[isActiveLink('/about') ? 'bg-gray-900 ring-2 ring-orange-600/45' : 'hover:bg-gray-900 hover:text-white', 'text-white', 'px-3', 'py-2', 'rounded-md', 'transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:translate-x-0.5 hover:bg-orange-600']">
                                Informacje
                            </RouterLink>
                            <RouterLink to="/pictures" :class="[isActiveLink('/pictures') ? 'bg-gray-900 ring-2 ring-orange-600/45' : 'hover:bg-gray-900 hover:text-white', 'text-white', 'px-3', 'py-2', 'rounded-md', 'transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:translate-x-0.5 hover:bg-orange-600']">
                                Zdjęcia
                            </RouterLink>
                            <RouterLink to="/reserve" :class="[isActiveLink('/reserve') ? 'bg-gray-900 ring-2 ring-orange-600/45' : 'hover:bg-gray-900 hover:text-white', 'text-white', 'px-3', 'py-2', 'rounded-md', 'transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:translate-x-0.5 hover:bg-orange-600']">
                                Rezerwacje
                            </RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>