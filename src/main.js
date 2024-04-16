import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia';
const pinia = createPinia();
const app = createApp(App)

app.config.compilerOptions.isCustomElement = (tag) => tag === "lord-icon";

app.use(pinia);
app.use(router)
app.mount('#app')
