import { sum } from './js/math';
import { createApp } from 'vue'
const { formatPrice } = require('./js/format');

import App from './vue/App.vue'

import './js/element';

console.log(sum(10, 20));
console.log(formatPrice());

const app = createApp(App);

app.mount('#app');
