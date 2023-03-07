class Point<T, E> {
  x: T;
  y: E;

  constructor(x: T, y: E) {
    this.x = x;
    this.y = y;
  }
}

const p1 = new Point(1.11, '2.22');
const p2 = new Point<number, string>(1.11, '2.22');
const p3: Point<number, string> = new Point(1.11, '2.22');

console.log(p1);
console.log(p2);
console.log(p3);

const names1: string[] = ['abc', 'bac', 'nab'];
const names2: Array<string> = ['abc', 'bac', 'nab'];
