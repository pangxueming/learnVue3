interface ISwim {
  swimming: () => void
}

interface IEat {
  eating: () => void
}

const a: ISwim = {
  swimming() {
    console.log('swimming');
  }
}

class Animal {

}

// 继承：类只能实现单继承
// 实现：实现接口，类可以实现多个接口
class Fish extends Animal implements ISwim, IEat {

  swimming() {
    console.log('fish swimming');
  };

  eating() {
    console.log('fish eating');
  }
}

class Peson implements ISwim {
  swimming() {
    console.log('Person swimming');
  }
}

function swimAction(swimble: ISwim) {
  swimble.swimming();
}

// 函数的参数使用了注解类型是接口的，所有用实现了类的实例对象都可以传入作为实参
swimAction(new Fish());
swimAction(new Peson());
swimAction({ swimming() { console.log('swimming obj'); } });

// function foo(swim: ISwim) {
//   swim.swimming();
// }
// foo(a);
