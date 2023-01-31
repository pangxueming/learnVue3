import _ from 'lodash-es';
import { add } from './js/math';
import './css/style.css';
import './css/title.less';
import addFn from './ts/mul';
import { createApp } from 'vue';
import App from './vue/App.vue';

console.log(add(20, 30));

console.log('cccccc');

console.log(_.join(['abc', 'cba'], '-'));
const divEl = document.createElement('div');
divEl.className = 'title';
divEl.innerHTML = '你好啊，vite';

document.body.appendChild(divEl);

console.log(addFn(30, 40));

createApp(App).mount('#app');
