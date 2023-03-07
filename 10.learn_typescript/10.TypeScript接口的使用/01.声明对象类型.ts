// 通过类型(type)别名来声明对象类型
// type InfoType = { name: string, age: number };

// 另一种声明对象类型：接口类型interface
// 在其中可以定义可选属性
// 也可以定义只读属性
interface IInfoType {
  readonly name: string,
  age: number,
  friend?: {
    name: string
  }
}

const info: IInfoType = {
  name: 'zhangsan',
  age: 15,
  friend: {
    name: 'lisi'
  }
}

console.log(info.friend?.name);
console.log(info.name);
// info.name = 'zhaoliu';

info.age = 20;
