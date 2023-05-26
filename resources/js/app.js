import './bootstrap';
import '@/css/app.scss';

// Import modules...
import { createApp } from 'vue'

// Import components...
import App from './App.vue'

// Import routes
import router from "./router/index";

// Create a new Vue application
const app = createApp(App);
app.use(router);

// Mount the application and start it
app.mount('#app')

