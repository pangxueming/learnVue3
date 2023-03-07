abstract class Shape {
  abstract getArea(): number;
}

class Rectangle extends Shape {
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }

  // 继承的抽象类的抽象方法必须实现
  getArea(): number {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  private r: number;

  constructor(r: number) {
    super();
    this.r = r;
  }

  getArea(): number {
    return this.r * this.r * 3.14
  }
}

function makeArea(shape: Shape) {
  return shape.getArea();
}

const rectangle = new Rectangle(20, 30);
const circle = new Circle(10);

console.log(makeArea(rectangle));
console.log(makeArea(circle));
// console.log(new Shape()); 抽象类不能被实现，只能通过继承

