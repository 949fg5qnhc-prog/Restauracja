import { createRouter, createWebHistory } from 'vue-router'
import MainPageView from '@/Views/MainPageView.vue'
import MenuView from '@/Views/MenuView.vue'
import AboutView from '@/Views/AboutView.vue'
import ReserveView from '@/Views/ReserveView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainPageView
    },
    {
      path: '/menu',
      name: 'menu',
      component: MenuView
    },
    {
      path: '/about',
      name: 'info',
      component: AboutView
    },
    {
      path: '/book',
      name: 'book',
      component: ReserveView
    }
  ],
})

export default router
