const obj = {
  name: 'zhangsan',
  age: 34
}

type Obj = typeof obj;
// keyof操作符 可以获取某种类型的所有键（key），返回key的联合类型 k1: 'name' | 'age'
type k1 = keyof typeof obj;

const key: k1 = 'age';
