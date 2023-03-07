// 命名空间 namespace
namespace time {
  export function format(time: string) {
    return '2023-03-07';
  }

  export function foo() {
    // console.log('test function foo');
  }

  let time: string | Date = new Date();
}

namespace price {
  export function format(price: string) {
    return '99.99¥';
  }
}

time.format('---');
time.foo();

export {
  time,
  price
}
