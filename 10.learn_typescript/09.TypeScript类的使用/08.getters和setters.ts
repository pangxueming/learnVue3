class Person {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  // 访问器： setters和getters
  get name() {
    return this._name;
  }

  set name(newVal) {
    this._name = newVal;
  }
}

const p = new Person('zhangsan');
console.log(p.name);
p.name = 'lisi';
console.log(p.name);

export { };
