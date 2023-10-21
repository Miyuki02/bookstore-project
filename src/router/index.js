import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/ShopIndex.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home,
      name: 'ShopIndex',
    },
    {
      path: '/login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/about',
      component: () => import('../views/About.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notfound',
      component: () => import('../views/NotFound.vue')
    }
  ]
})

export default router
