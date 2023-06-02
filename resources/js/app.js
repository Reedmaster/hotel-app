import About from '@/components/About.vue';
import Home from '@/components/Home.vue';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import './bootstrap';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    { path: '/about', name: 'About', component: About },
  ],
});

createApp(App).use(router).mount('#v-app');
