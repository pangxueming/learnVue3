function add(num1: number, num2: number) {
  return num1 + num2;
}

type AddReturnType = ReturnType<typeof add>;
// type AddReturnType: number
const num1: AddReturnType = 1;

function foo() {
  return {
    x: 1,
    y: '2'
  }
}

type P = ReturnType<typeof foo>;
const p: P = {
  x: 1,
  y: '2'
}

export { };
