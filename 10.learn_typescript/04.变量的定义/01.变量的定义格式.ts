// 1. :string 是类型注解
// 2. var/let/const
// 3. string和String的区别
// 4. 类型推导

var name: string = 'zhangsan';
let age: number = 24;
const height: number = 1.78;

// string: TypeSript中的字符串类型
// String: JavaSript中的字符串包装类的类型
const message: string = 'hello world';
console.log(name, age, height, message);

// 默认情况下进行赋值时，会将赋值的值的类型，作为前面标识符的类型
// 这个过程称之为类型推导/推断
// foo没有添加类型注解
let foo = 'string';

export { };
