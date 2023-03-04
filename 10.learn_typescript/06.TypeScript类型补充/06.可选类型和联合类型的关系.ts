// 让一个参数本身是可选的
// 一个参数是可选参数的时候，它类似于这个参数是 类型|undefined 的联合类型
function foo(message?: string) {
  console.log(message);
}

foo('hello message');
foo();
