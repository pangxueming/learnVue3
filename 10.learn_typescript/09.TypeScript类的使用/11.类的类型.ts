class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  eating() {
    console.log(this.name + ' is eating(class)');
  }
}

const p = new Person('zhangsan');
const person: Person = {
  name: 'lisi',
  eating() {
    console.log(this.name + ' is eating(function)');
  },
}

function printPeson(p: Person) {
  console.log(p.name);
  p.eating();
}

printPeson(new Person('zhaoliu'));
printPeson({
  name: 'guijiaoqi', eating() {
    console.log(this.name + ' is eating function');
  },
})

export { };
