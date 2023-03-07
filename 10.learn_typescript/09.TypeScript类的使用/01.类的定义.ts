class Person {
  public name: string;
  public age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }


  eating() {
    console.log(this.name + ' eating');
  }
}

const p = new Person('zhangsan', 26);
console.log(p.name);
console.log(p.age);
p.eating();

