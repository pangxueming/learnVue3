function foo() {
  return '123';
}

function bar() {
  return '123';
}

// unknow类型只能赋值给any和unknown类型
// any类型可以赋值给任意类型
let flag: boolean = true;
let result1: unknown;
let result2: any;

if (flag) {
  result1 = result2 = foo();
} else {
  result1 = result2 = bar();
}

// let message1: string = result1; // 此处报错
let message2: string = result2;


console.log(result1, result2);


export { };