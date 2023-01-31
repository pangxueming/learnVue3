import { sum } from './js/math';
const { formatPrice } = require('./js/format');
import './js/element';

console.log(sum(10, 20));
console.log(formatPrice());

const message = 'hello world';
const arr = ['abc', 'cba', 'nbd'];

arr.forEach(item => console.log(item));

console.log(message);
