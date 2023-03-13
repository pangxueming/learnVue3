enum Direction {
  Up = 1,
  Down,
  Left,
  Right
}

type Result = typeof Direction;
/**
 * Result 类似于
 * {
    Up: number,
    Down: number,
    Left: number,
    Right: number,
  }
 */

const bar: Result = {
  Up: 1,
  Down: 2,
  Left: 3,
  Right: 4
}

console.log(bar);

export {};
