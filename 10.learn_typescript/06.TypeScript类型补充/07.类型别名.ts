// type用于定义类型别名（type alias）
type IDType = number | string;
type PointType = {
  x: number,
  y: number,
  z?: number
}

function getID(id: IDType) {
  console.log(id);
}

const point: PointType = {
  x: 100,
  y: 200,
  z: 300
}
