import { createApp } from 'vue'
import './style/index.css'
import App from './10.作用域插槽/App.vue'

const app = createApp(App)
app.config.unwrapInjectedRef = true
app.mount('#app')
