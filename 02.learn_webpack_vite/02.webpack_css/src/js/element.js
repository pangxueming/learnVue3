import '../css/index.css';
import '../css/title.less';

const divEl = document.createElement('div');

console.log(divEl);

divEl.className = 'title';
divEl.innerHTML = '你好啊，李银河';

document.body.appendChild(divEl);
