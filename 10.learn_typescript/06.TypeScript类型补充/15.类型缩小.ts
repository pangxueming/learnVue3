// 1.typeof的类型缩小
type IDType = string | number;
function printID(id: IDType) {
  if (typeof id === 'string') {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}

printID('sdlfjlkdJ');

// 2.平等类型缩小（===, ==, !==, !=, switch）
type Direction = 'left' | 'right' | 'top' | 'bottom';
function getDirection(direction: Direction) {
  // 1.if
  // if (direction === 'left') {
  //   console.log(direction);
  // }

  // 2.switch
  switch (direction) {
    case 'left':
      console.log(direction);

      break;
    case 'right':
      console.log(direction);

      break;
    case 'top':
      console.log(direction);

      break;
    case 'bottom':
      console.log(direction);

      break;
    default:
      console.log(direction);

      break;
  }
}

// 3.instanceof
function getTime(time: string | Date) {
  if (time instanceof Date) {
    console.log(time.toUTCString());
  }
}

class Student {
  studying() { }
}

class Teacher {
  teaching() { }
}

function work(p: Student | Teacher) {
  if (p instanceof Student) {
    p.studying();
  } else {
    p.teaching();
  }
}

// 4.in
type Fish = {
  swimming: () => void
}
type Dog = {
  running: () => void
}

function walk(animal: Fish | Dog) {
  if ('swimming' in animal) {
    animal.swimming();
  } else {
    animal.running();
  }
}

export { };
