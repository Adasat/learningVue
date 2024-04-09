
import {createRouter, createWebHashHistory} from "vue-router";

import Favorites from "../pages/Favorites.vue";
import Home from '../pages/Home.vue'

const routes = [
  {path: '/', component: Home},
  {path: '/favorites', component: Favorites}
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router