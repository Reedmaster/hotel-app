import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import './bootstrap';
import {routes} from './routes.js';

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

createApp(App).use(router).mount('#v-app');
