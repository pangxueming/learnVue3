// function sum(num1: number, num2: number) {
//   return num1 + num2;
// }

// sum(20, 30);

// 类型的参数化

// 在定义一个函数时，不决定这个函数的参数类型
// 在调用这个函数时，传入参数作为函数的参数类型
function sum<Type>(num: Type): Type {
  return num;
}

// 1.调用方式一： 明确传入参数类型
sum<number>(10);
sum<{name: string}>({name: 'zhangsan'});
sum<any[]>(['abc']);

// 2.调用方式二： 类型推导
sum(50);
sum('abc');
