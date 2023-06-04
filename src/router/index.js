import { createRouter, createWebHistory } from 'vue-router'
// import routes from "~pages";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      {
          path: '/',
          component: () => import('../views/client/Main.vue')
      },
      {
          path: '/post',
          component: () => import('../views/client/post/index.vue')
      },
  ]
})

export default router
