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
  },
  {
    path: "/projects",
    component: () => import('../views/Projects.vue'),
  },
  {
    path: "/projects/:id",
    component: () => import('../views/projects/project.vue'),
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

export default router