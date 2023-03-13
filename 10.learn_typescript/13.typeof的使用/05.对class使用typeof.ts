class Point {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}


function getInstance1(PointClass: Point) {
  return PointClass;
}

getInstance1({
  x: 1,
  y: 2
})

function getInstance2(PointClass: typeof Point){
  return new PointClass(1, 2)
}

getInstance2(Point);

export { };
