import { createApp } from 'vue';
import App from './App.vue';
import AlertButtonPlugin from './AlertButtonPlugin';

const app = createApp(App);
app.use(AlertButtonPlugin);
app.mount('#app');
