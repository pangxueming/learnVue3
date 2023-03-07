// type CalcFunc = (n1: number, n2: number) => number;

// 可调用的接口
interface CalcFunc {
  (n1: number, n2: number): number
}

function calc(num1: number, num2: number, calcFunc: CalcFunc) {
  return calcFunc(num1, num2);
}

const add: CalcFunc = (num1: number, num2: number) => {
  return num1 + num2;
}

console.log(calc(20, 30, add));
