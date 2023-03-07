// 泛型接口
interface IPerson<T, E> {
  name: T,
  age: E
}

interface Animal<T> {
  name: T,
  color: string
}

const p: IPerson<string, number> = {
  name: 'zhangsan',
  age: 24
}

const animal: Animal<string> = {
  name: '龙猫',
  color: '褐色'
}

export { };