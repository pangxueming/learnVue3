// this是可以被推到出来 info对象（TypeScript推导出来）
const info = {
  name: 'zhangsan',
  eating() {
    console.log(this.name + ' eating');
  }
}

info.eating();

export { };