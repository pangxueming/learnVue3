import { createApp } from 'vue'
import './style/index.css'
import App from './11.动态组件的使用/App.vue'

const app = createApp(App)
app.config.unwrapInjectedRef = true
app.mount('#app')
