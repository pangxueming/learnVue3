function fn(x: string | number) {
  if (typeof x === 'number') {
    return x.toFixed(2);
  }
}

console.log(fn(3.14159));

export { };
