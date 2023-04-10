import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../App.vue')
  },
  {
    path: '/demo',
    name: 'demo',
    component: () => import('../demo.vue')
  },
  // {
  //   path: '/xuan',
  //   name: 'xuan',
  //   component: () => import('../xuan.vue')
  // },
  {
    path: '/loading',
    name: 'loading',
    component: () => import('../loading.vue')
  },
  // {
  //   path: '/wave',
  //   name: 'wave',
  //   component: () => import('../wave.vue')
  // },
  {
    path: '/learn',
    name: 'learn',
    component: () => import('@/view/test/learn01.vue')
  },
  {
    path: '/canvas',
    name: 'canvas',
    component: () => import('@/view/test/canvas.vue')
  },
  {
    path: '/learnVue',
    name: 'learnVue',
    component: () => import('../view/test/learn02.vue')
  },
  {
    path: '/learn03',
    name: 'learn03',
    component: () => import('../view/test/learn03.vue')
  },
  // {
  //   path: '/learn04',
  //   name: 'learn04',
  //   component: () => import('../view/test/learn04.vue')
  // },
  {
    path: '/debounce',
    name: 'debounce',
    component: () => import('../view/test/debounce.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach(async (to, from, next) => {
  next()
})
export default router
