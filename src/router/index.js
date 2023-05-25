import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // 일반 페이지 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    { path: '/', name: 'blog', component: () => import('../views/client/blog/BlogListView.vue') },
    // 관리자 페이지 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // { path: '/console', name: 'about', component: () => import('../views/client/AboutView.vue') }
  ]
})

export default router
