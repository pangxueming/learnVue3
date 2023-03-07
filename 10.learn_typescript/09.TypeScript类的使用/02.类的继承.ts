class Person {
  name: string;
  age: number

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  eating() {
    console.log(this.name + ' parent eating');
  }
}

class Student extends Person {
  sno: number;
  constructor(name: string, age: number, sno: number) {
    super(name, age); // super() 调用父类的构造方法
    this.sno = sno;
  }

  // 重写父类方法
  eating(): void {
    super.eating();
    console.log(this.name + ' student eating');
  }

  study() {
    console.log('study');
  }
}

class Teacher extends Person {
  title: string;

  constructor(name: string, age: number, title: string) {
    super(name, age);
    this.title = title;
  }

  teaching() {
    console.log('teaching');
  }
}

const stu = new Student('小明', 17, 12345);
const teacher = new Teacher('赵老师', 40, '一级教师');

console.log(stu.name, stu.age, stu.sno);
stu.eating();
stu.study();

console.log(teacher.name, teacher.age, teacher.title);
teacher.eating();
teacher.teaching();

export { }
