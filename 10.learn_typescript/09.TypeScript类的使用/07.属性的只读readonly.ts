class Person {
  // 1.只读属性是可以在构造器中赋值, 赋值之后就不可修改
  // 2.只读属性本身不能直接修改，如果是引用类型，只读属性的属性是可以更改的
  readonly name: string;
  readonly friend?: Person;
  age?: number;

  constructor(name: string, friend?: Person, age?: number) {
    this.name = name;
    this.friend = friend;
    this.age = age;
  }
}

const friend = new Person('lisi', new Person('wangwu'), 18)
const p = new Person('zhansan', friend);

console.log(p.name);
console.log(p.friend);

if (p.friend) {
  p.friend.age = 20; 
}
