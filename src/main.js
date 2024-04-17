import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia';
import PrimeVue from 'primevue/config'

const pinia = createPinia();
const app = createApp(App)

app.config.compilerOptions.isCustomElement = (tag) => tag === "lord-icon";

app.use(pinia).use(router).use(PrimeVue).mount('#app')

