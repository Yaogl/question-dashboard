import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import GloblLayout from '../layouts/globlLayout.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '首页',
    redirect: '/about',
    component: GloblLayout,
    children: [
      {
        path: '/about',
        component: import(/* webpackChunkName: "about" */ '../views/About.vue'),
        meta: {
          title: '云主机'
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
