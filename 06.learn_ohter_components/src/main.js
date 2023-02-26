import { createApp } from 'vue'
import App from './03.自定义指令/App.vue'
import pluginObject from './05.plugins/plugins-object'
import pluginFunction from './05.plugins/plugins-function'

const app = createApp(App)

// app.directive('focus', {
//   mounted: (el) => el.focus()
// })

// registerDirectives(app)

app.use(pluginObject)
app.use(pluginFunction)

app.mount('#app')
