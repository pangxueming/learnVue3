// message?: string -> string | undefined
function printMessageLength(message?: string) {
  // 非空类型断言! 保证一定有值
  console.log(message!.length);
}

printMessageLength('hello world');
printMessageLength('hahahah');
printMessageLength('');
