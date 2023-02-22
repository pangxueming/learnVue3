class Dep {
  constructor() {
    this.subcribers = new Set();
  }

  depend() {
    if (!activeEffect) return;
    this.subcribers.add(activeEffect);
  }

  notify() {
    this.subcribers.forEach(effect => {
      effect();
    })
  }
}

let activeEffect = null;
function watchEffect(effect) {
  activeEffect = effect;
  effect(); // 首次使用就调用一次
  activeEffect = null;
}

// Map({key: value}): key是任何值
// weakMap({key: value}): key是一个对象，弱引用
const targetMap = new WeakMap();
function getDep(target, key) {
  // 1.根据对象（target）取出对应的Map对象；
  let depsMap = targetMap.get(target);
  if (!depsMap) {
    depsMap = new Map();
    targetMap.set(target, depsMap);
  }

  // 2. 取出具体的dep值
  let dep = depsMap.get(key);
  if (!dep) {
    dep = new Dep();
    depsMap.set(key, dep);
  }

  return dep;
}

// vue3对数据进行劫持
function reactive(raw) {
  return new Proxy(raw, {
    get(target, key) {
      const dep = getDep(target, key);
      dep.depend();

      return typeof target[key] === 'object' ? reactive(target[key]) : target[key]; // 递归处理
    },
    set(target, key, newVal) {
      const dep = getDep(target, key);
      target[key] = newVal;
      dep.notify();
    }
  });
}


// const info = reactive({
//   counter: 100,
//   name: 'zhangsan',
//   friend: {
//     name: 'lisi',
//     age: 23,
//     parent: {
//       father: 45,
//       mather: 42,
//     }
//   }
// });
// const foo = reactive({ bar: 'test' });

// watchEffect(function () {
//   console.log('effect1: ', info.counter * 2, info.name);
// })

// watchEffect(function () {
//   console.log('effect2: ', info.counter * info.counter, foo.bar);
// })

// watchEffect(function () {
//   console.log('effect3: ', info.counter + 10, info.name);
// })

// watchEffect(function () {
//   console.log('effect4: ', foo.bar);
// })

// watchEffect(function () {
//   console.log('effect5: ', info.friend.name, info.friend.age);
// })

// watchEffect(function () {
//   console.log('effect6: ', info.friend.parent.father, info.friend.parent.mather);
// })

// info.counter++;
// info.friend.age++;
// info.friend.parent.father++;
// info.friend.parent.mather++;
// foo.bar = 'lilei';
// foo.bar = 'test';