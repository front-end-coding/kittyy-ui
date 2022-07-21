import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home.vue')
  },
  {
    path: '/button',
    name: 'button',
    component: () => import('@/views/button/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router