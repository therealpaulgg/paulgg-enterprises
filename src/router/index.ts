import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import Home from "@/views/Home.vue"
import Portfolio from "@/views/Portfolio.vue"
import Skills from "@/views/Skills.vue"

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
        path: "/portfolio",
        name: "Portfolio",
        component: Portfolio,
        meta: {
            title: "Portfolio",
        },
    },
    {
        path: "/skills",
        name: "Skills",
        component: Skills,
        meta: {
            title: "Skills",
        },
    },
    {
        path: "/:catchAll(.*)",
        redirect: "/",
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
