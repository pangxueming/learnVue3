import { createApp } from 'vue'
// import App from './App.vue'
import App from './App-nexttick.vue';
import store from './store'

const app = createApp(App)
app.use(store);
app.mount('#app');

