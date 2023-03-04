type CalcFuncType = (num1: number, num2: number) => number
function calc(a1: number, a2: number, fn: CalcFuncType) {
  return fn(a1, a2);
}

const result1 = calc(10, 30, function (num1, num2) {
  return num1 + num2;
})

const result2 =calc(10, 30, function (num1, num2) {
  return num1 * num2;
})

const result3 =calc(10, 30, function (num1, num2) {
  return num1 - num2;
})

console.log(result1, result2, result3);
