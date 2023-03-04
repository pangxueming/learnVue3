// 'hello world'也是可以作为类型的，叫做字面量类型；
const message: 'hello world' = 'hello world';
console.log(message);

// 字面量类型的意义，就是必须结合联合类型
type Alinment = 'left' | 'center' | 'right'
let align: Alinment = 'center';
align = 'left';
align = 'right';
console.log(align);

export { };