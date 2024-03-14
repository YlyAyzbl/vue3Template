// src/router/index.ts

import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Login from '@/views/login/index.vue';
import Register from '@/views/register/index.vue';
import Home from '@/views/home/index.vue';
// import Contact from '../components/Contact.vue';

const routes: Array<RouteRecordRaw> = [
    { path: '/login', component: Login },
    { path: '/signup', component: Register },
    { path: '/', component: Home },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
