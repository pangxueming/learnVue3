import { sub, sum } from './utils/math';
import { time, price } from './utils/format';

import axios from 'axios';
import lodash from 'lodash';

import nhltImg from './img/nhlt.jpg';

console.log(sum(20, 30));
console.log(sub(50, 30));


console.log(time.format('12:00'));
console.log(price.format('99.99'));

// axios.get('http://123.207.32.32:8000/home/multidata').then(res => {
//   console.log(res);
// })

console.log(personName);
console.log(personAge);
console.log(personHeigth);
personFoo();

const p = new Person('zhangsan', 24);
console.log(p);

$.ajax({
  url: 'http://123.207.32.32:8000/home/multidata',
  success: function (res: any) {
    console.log(res);
    
  }
})

