// number | string 联合类型
function printID(id: number | string | boolean) {
  // 使用联合类型的值时，需要特别注意
  // narrow：缩小
  if (typeof id === 'string') {
    // Typescript帮助确定id一定是string类型
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}

printID(10);
printID('ccccsd');
printID(true);
