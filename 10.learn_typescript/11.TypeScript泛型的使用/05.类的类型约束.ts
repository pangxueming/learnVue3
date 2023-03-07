interface ILength {
  length: number
}

function getLength<T extends ILength>(arg: T) {
  return arg.length;
}

getLength('abc');
getLength(['abc', 'and', 'bca']);
getLength({ length: 1000 });
