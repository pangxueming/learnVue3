type Person = {
  name: string,
  friend?: {
    name: string,
    age?: number,
    girlFriend?: {
      name: string,
    }

  }
}

const info: Person = {
  name: 'zhangsan',
  friend: {
    name: 'lisi',
    girlFriend: {
      name: 'xiaosi'
    }
  }
}

console.log(info.name);
// ?.可选链
console.log(info.friend?.name);
console.log(info.friend?.age);
console.log(info.friend?.girlFriend?.name);

export { };