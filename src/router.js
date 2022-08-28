import {createRouter, createWebHistory} from "vue-router";
import SongsList from "@/components/SongsList";
import AdminPaenl from "@/components/adminPaenl";

const routes = [
    {
        path: '/',
        component: SongsList
    },
    {
        path: '/admin',
        component: AdminPaenl
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;