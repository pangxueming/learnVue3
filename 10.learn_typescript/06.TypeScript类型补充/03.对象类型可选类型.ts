// Point: x/y
type Piont = {
  x: number,
  y: number,
  z?: number
};

function printPoint(point: Piont) {
  console.log(point.x);
  console.log(point.y);
  console.log(point.z);
}

printPoint({ x: 10.1, y: 23.3 });
