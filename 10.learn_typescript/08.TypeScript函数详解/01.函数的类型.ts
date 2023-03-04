// 1.函数作为参数时，在参数中如何编写类型
type FooFnType = () => void;
function foo(): void {

}

function bar(fn: FooFnType) {
  fn();
}

bar(foo);

// 2.定义常量函数时，编写函数的类型
type AddFuncType = (num1: number, num2: number) => number;
const add: AddFuncType = (num1: number, num2: number) => {
  return num1 + num2;
}

add(10, 20);
