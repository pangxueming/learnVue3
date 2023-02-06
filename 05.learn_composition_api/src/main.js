import { createApp } from 'vue'
import App from './04.computed和watch/App.vue'

const app = createApp(App)

// app.mixin({
//   created() {
//     console.log('全局的minix created生命周期');
//   }
// })

app.mount('#app')
