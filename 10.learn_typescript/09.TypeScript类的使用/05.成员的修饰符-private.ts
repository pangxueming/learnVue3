// private：子类不能访问父类的成员变量
class Person {
  public name: string = 'zhangsan';
  private age: number = 10;

  get pName() {
    return this.age;
  }
}

class Student extends Person {
  // getAge() {
  //   return this.age;
  // }
}

const p = new Person();
console.log(p.name);
console.log(p.pName);

export { };
