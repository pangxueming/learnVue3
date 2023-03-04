// 函数的重载： 函数的名称相同，但是参数不同的几个函数，就是函数的重载
function add(num1: number, num2: number): number; //没函数体
function add(num1: string, num2: string): string;

function add(num1: any, num2: any): number | string {
  if (typeof num1 === 'string' && typeof num2 === 'string') {
    return num1.length + num2.length;
  }
  return num1 + num2;
}

const result1 = add(10, 20);
const result2 = add('abc', 'adb');

console.log(result1, result2);

// 在函数的重载中，实现函数是不能直接被调用的
// add({name: 'zhangsan'}, {name: 'lisi'});

export { }
