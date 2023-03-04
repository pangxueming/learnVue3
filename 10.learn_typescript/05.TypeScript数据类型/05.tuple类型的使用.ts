// tuple(元组类型): 多种元素的组合

// 1.数组的弊端
// const info: any[] = ['zhangsan', 25, 1.98];
// const name = info[0];
// console.log(name.lenght); //没有办法拿到item的类型

// 2.元组类型的特点：
const info: [string, number, number] = ['zhangsan', 25, 1.88];
const name: string = info[0];
const age = info[1];

console.log(name.length);
console.log(age);

export { };