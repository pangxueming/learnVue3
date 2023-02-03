import { createApp } from 'vue'
import './style/index.css'
import App from './13.引入元素和组件/App.vue'
// import { sum } from './12.异步组件的使用/utils/match'

const app = createApp(App)
app.config.unwrapInjectedRef = true
app.mount('#app')

// console.log(sum(10, 20));
// 通过import函数倒入的模块，后续webpack对其进行打包的时候就会进行分饱的操作
// import('./12.异步组件的使用/utils/match').then(({ sum }) => { // 分包
//   console.log(sum(10,20));
// })
