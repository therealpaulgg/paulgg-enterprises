import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import Home from "/@/views/Home.vue"

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Home",
        component: Home,
        meta: {
            title: "Home",
        },
    },
    {
        path: "/:catchAll(.*)",
        redirect: "/",
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router
