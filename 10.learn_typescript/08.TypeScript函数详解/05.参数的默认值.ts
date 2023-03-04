// 必传参数 -> 有默认值的参数 -> 可选参数
function foo(x: number, y: number = 100) {
  console.log(x, y);
}

foo(10);

function bar(x: number = 100, y: number) {
  console.log(x, y);
}

bar(undefined, 50);

export { };
