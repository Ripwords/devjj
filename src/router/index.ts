import { createWebHashHistory, RouteRecordRaw, createRouter } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    component: () => import('../views/Home.vue')
  },
  {
    path: "/astro",
    component: () => import('../views/Astro.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

export default router