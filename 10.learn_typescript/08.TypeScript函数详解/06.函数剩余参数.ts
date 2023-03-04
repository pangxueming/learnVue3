

function sum(initalNum: number, ...nums: number[]) {
  let total = initalNum;
  for (const num of nums) {
    total += num;
  }
  return total;
}

console.log(sum(20, 30));
console.log(sum(20, 30, 50));
console.log(sum(20, 30, 50, 60));

export { };