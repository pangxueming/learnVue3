// Point: x/y
interface Point {
  x: number;
  y: number,
}

function printPoint(point: Point) {
  console.log(point.x);
  console.log(point.y);
}

printPoint({ x: 10.1, y: 23.3 });

const point: Point = { x: 10, y: 20 };

export { };
