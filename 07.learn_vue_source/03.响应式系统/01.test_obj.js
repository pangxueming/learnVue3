const info = { name: 'lisi', age: 39 };

Object.keys(info).forEach(key => {
  let value = info[key]; // 闭包，使得getter和setter都是用value同一个变量

  Object.defineProperty(info, key, {
    get() {
      return value;
    },

    set(newVal) {
      value = newVal;
    }
  })
})

info.name = 'wangwu';
