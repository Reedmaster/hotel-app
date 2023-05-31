import './bootstrap';
import { createApp } from 'vue';
import Welcome from './Welcome.vue';

const app = createApp({});

app.component('Welcome', Welcome)

app.mount('#v-app');