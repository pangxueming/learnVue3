function add(num1: number, num2: number) {
  return num1 + num2;
}

type Add = typeof add;

const foo: Add = function (num1, num2) {
  return num1 + num2;
}

const bar: { foo: Add } = {
  foo(num1, num2) {
    return num1 - num2;
  },
}

export { };
