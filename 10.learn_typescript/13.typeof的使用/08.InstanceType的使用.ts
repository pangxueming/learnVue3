class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

type P = InstanceType<typeof Person>;
type TPerson = typeof Person;

const p: P = {
  name: 'zhangsan',
  age: 24
}

function getPerson(PersonClass: TPerson) {
 const p = new PersonClass('zhangsan', 34);
 console.log(p);
}

getPerson(Person);

export { };
