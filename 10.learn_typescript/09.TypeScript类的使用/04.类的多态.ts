class Animal {
  action() {
    console.log('animal running');
  }
}

class Dog extends Animal {
  action() {
    console.log('dog running');
  }
}

class Fish extends Animal {
  action() {
    console.log('fish swimming');
  }
}

// 多态的目的是为了写出更具备通用性的代码
// 父类引用指向子类对象
function makeActions(animals: Animal[]) {
  animals.forEach(animal => {
    animal.action();
  })
}

makeActions([new Dog(), new Fish()])
