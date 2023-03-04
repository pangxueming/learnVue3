function foo(message) {
  console.log(message.length);
}

try {
  foo('zhangsan');
  foo();
} catch (error) {
  console.log(error);
}

console.log('other code need to run');
