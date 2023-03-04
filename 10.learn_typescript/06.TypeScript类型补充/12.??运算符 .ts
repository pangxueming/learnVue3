const message: string | null = 'test message';

// ??空值合并运算符： 左侧操作数的值为null或undefined时，返回右边造作数，否则返回左边操作数
let content = message ?? '??空值合并运算符';

console.log(content);

export { };
