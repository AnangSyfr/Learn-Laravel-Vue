import { createRouter, createWebHistory } from "vue-router";
export const router = createRouter({
    // history: createWebHistory("laravel-vue/public"),
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: () => import("../pages/Login.vue"),
        },
        {
            path: "/register",
            component: () => import("../pages/Register.vue"),
        },
        {
            path: "/home",
            component: () => import("../pages/Home.vue"),
        },
    ],
});
