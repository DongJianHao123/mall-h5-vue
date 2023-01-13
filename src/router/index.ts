import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/Home/HomeView.vue'
import HomeWrap from '../views/HomeWrap.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: HomeWrap,
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'home',
          component: HomeView,
        },
        {
          path: '/categories',
          name: 'categories',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/About/AboutView.vue')
        },
        {
          path: '/found',
          name: 'found',
          component: HomeView,
        },
        {
          path: '/cart',
          name: 'cart',
          component: HomeView,
        },
        {
          path: '/user',
          name: 'user',
          component: HomeView,
        },
        {
          path: '/category/:id',
          name: 'category',
          component: HomeView,
        },
      ]
    },

  ]
})

export default router
