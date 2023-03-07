interface IPerson {
  name: string,
  age: number,
  height: number
}

const info = {
  name: 'zhangsan',
  age: 24,
  height: 1.78,
  address: '广州市'
}

// // freshness 擦除
// const person: IPerson = info;
// console.log(info.address, person);

function printInfo(p: IPerson) {
  console.log(p.age);
}

printInfo(info);
// printInfo({
//   name: 'zhangsan',
//   age: 24,
//   height: 1.78,
//   address: '广州市'
// })
