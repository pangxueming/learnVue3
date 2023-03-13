interface IPerson {
  name: string;
  age?: number;
}

const person: IPerson = {
  name: 'zhangsan',
  age: 34
}

// 可以获取字面量对象的类型
type Person = typeof person;

const p: Person = {
  name: 'lisi'
}

const userInfo = {
  name: 'wangwu',
  age: 23,
  friend: {
    name: 'friend1',
    age: 20
  }
}

type UserInfo = typeof userInfo;

const user: UserInfo = {
  name: 'zhaoliu',
  age: 34,
  friend: {
    name: 'guaijiaoqi',
    age:50
  }
}

// const arr: Array<string> = ['1', '2'];
// type Arr = typeof arr;

// const arr2: Arr = ['1', 3];

export { };
