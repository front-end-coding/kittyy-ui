import { createApp } from 'vue'
import App from './App.vue'
// import '@ui1024/components/es/style.css';
import Router from './router'

const app = createApp(App);
app.use(Router);
app.mount('#app');