// type Direction = 'left' | 'center' | 'right';

enum Direction {
  LEFT = 100,
  RIGHT,
  TOP,
  BOTTOM
}

function turnDirection(direction: Direction) {
  console.log(direction);
  
  switch (direction) {
    case Direction.LEFT:
      console.log('向左转');
      break;
    case Direction.RIGHT:
      console.log('向右转');
      break;
    case Direction.TOP:
      console.log('向上转');
      break;
    case Direction.BOTTOM:
      console.log('向下转');
      break;
    default:
      const foo: never = direction;
      break;
  }
}

turnDirection(Direction.LEFT);
turnDirection(Direction.RIGHT);

export { };
