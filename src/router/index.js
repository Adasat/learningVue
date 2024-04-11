
import {createRouter, createWebHistory, createWebHashHistory} from "vue-router";

import Favorites from "../pages/Favorites.vue";
import Home from '../pages/Home.vue'
import BaseLayout from '../layouts/BaseLayout.vue'
import LifeCycle from "@/pages/LifeCycle.vue";

const routes = [
  {
    path: '/',
    component: BaseLayout,
    children: [
  {path: '/', component: Home},
  {path: '/favorites', component: Favorites},
  {path: '/mount', component: LifeCycle}
]}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router