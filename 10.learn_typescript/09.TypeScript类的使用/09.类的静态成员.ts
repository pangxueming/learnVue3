class Person {
  name: string;
  age: number;
  static time: string = '20:00';

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  static attendClass() {
    console.log('去学习！');
  }
}

console.log(Person.time);
Person.attendClass();

export { };
