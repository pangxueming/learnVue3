type ThisType = { name: string };

function eating(this: ThisType, message: string) {
  console.log(this.name + ' eating', message);
}

const info = {
  name: 'zhangsan',
  eating: eating
}

// 隐式绑定
info.eating('hhahah');

// 显式绑定
eating.call({ name: 'lisi' }, 'hehehehe');
eating.apply({ name: 'wangwu' }, ['hehehehe']);

export { };