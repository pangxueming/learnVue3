// protected：在类内部和子类都可以访问

class Person {
  protected name: string = 'zhangsan';
  private age: number = 10;

  get pAge() {
    return this.age;
  }
}

class Student extends Person {
  get pName() {
    return this.name;
  }

  set pName(newVal) {
    this.name = newVal;
  }
}

const stu = new Student();
stu.pName = 'lisi';
console.log(stu.pName);

export { };
