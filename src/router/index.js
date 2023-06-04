import { createRouter, createWebHistory } from 'vue-router'
// import routes from "~pages";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // routes,
  routes: [
    // 일반 페이지 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    {
      path: '/',
      component: () => import('../views/client/Main.vue')
    },
    {
      path: '/post',
      component: () => import('../views/client/post/index.vue')
    },
    // 관리자 페이지 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    {
      path: '/console',
      component: () => import('../views/console/Main.vue')
    },

    {
      path: '/console/post',
      component: () => import('../views/console/post/index.vue')
    }
  ]
})

export default router
