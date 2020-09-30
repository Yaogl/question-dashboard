import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import GloblLayout from '../layouts/globlLayout.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '首页',
    redirect: '/question/list',
    component: GloblLayout,
    children: [
      {
        path: '/question/list',
        component: import(/* webpackChunkName: "about" */ '../views/question/list.vue'),
        meta: {
          title: '题库列表'
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
