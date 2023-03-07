
/**
 * interface 和 type 的区别
 *  如果是定义非对象类型，通常推荐使用type，比如Direction、Alignment、一些Function
 *  如果定义对象类型：（通常建议使用interface） 
 *    interface可以重复的对某个接口来定义属性和方法；
 *    而type定义的是别名，别名是不能重复的；
 */
interface IFoo {
  name: string
}

interface IFoo {
  age: number
}

const foo: IFoo = {
  name: 'zhangsan',
  age: 24
}

// type Foo = {
//   name: string
// }

// type Foo = {
//   age: number
// }


// interface Window {
//   age: number
// }

// window.age = 10;
// console.log(window.age);
