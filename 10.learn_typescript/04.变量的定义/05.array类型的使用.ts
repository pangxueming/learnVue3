// 类型注解： type annotation
const names: Array<string | number> = [123, 'zhangsan']; // 不推荐，在tsx中是有冲突的
// 尽量确保数字的类型唯一
const movies: (string | number)[] = [456, 'lisi'];


