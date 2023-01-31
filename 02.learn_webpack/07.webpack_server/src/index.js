import { sum } from './js/math';
import { createApp } from 'vue'
const { formatPrice } = require('./js/format');
import axios from 'axios';

import App from '@/vue/App';
import './js/element';

if (module.hot) {
  module.hot.accept('./js/element');
}

console.log(sum(10, 20));
console.log(formatPrice());

const app = createApp(App);

app.mount('#app');
console.log('2222');
// console.log('3333');
// console.log('4444');
// console.log('5555');

axios.get('/api/systemSetting/user/findAllKindsPersonnel').then(res => {
  console.log(res);
})
