import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // 일반 페이지 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    { path: '/', name: 'home', component: HomeView },
    { path: '/about', name: 'about', component: () => import('../views/AboutView.vue') },
    // 관리자 페이지 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    { path: '/console', name: 'about', component: () => import('../views/AboutView.vue') }
  ]
})

export default router
