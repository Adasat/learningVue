
import {createRouter, createWebHistory, createWebHashHistory} from "vue-router";

import Favorites from "../pages/Favorites.vue";
import Home from '../pages/Home.vue'
import BaseLayout from '../layouts/BaseLayout.vue'
import LifeCycle from "@/pages/LifeCycle.vue";
import AliveComponent from "../pages/AliveComponent.vue"

const routes = [
  {
    path: '/',
    component: BaseLayout,
    children: [
  {path: '/', component: Home},
  {path: '/favorites', component: Favorites},
  {path: '/mount', component: LifeCycle},
  {path: '/alive', component: AliveComponent }
]}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router