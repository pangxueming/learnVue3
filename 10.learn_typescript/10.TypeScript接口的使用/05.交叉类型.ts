// 一种组合类型的方式：联合类型
type DIYType = string | number;
type Direction = 'left' | 'center' | 'right';


// 另一种组合类型的方式: 交叉类型
type CombinType = 'left' & 'center';

interface ISwim {
  swimming: () => void
}

interface IFly {
  flying: () => void
}

type MyType1 = ISwim | IFly;
type MyType2 = ISwim & IFly;

const obj1: MyType1 = {
  swimming() { }
}

const obj2: MyType2 = {
  swimming() { },
  flying() { }
}

export { };