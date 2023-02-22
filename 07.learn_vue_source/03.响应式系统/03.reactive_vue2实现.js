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
  effect();
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

// vue2对数据进行劫持
function reactive(raw) {
  Object.keys(raw).forEach(key => {
    const dep = getDep(raw, key);
    let value = raw[key];

    Object.defineProperty(raw, key, {
      get() {
        dep.depend();
        return value;
      },

      set(newVal) {
        if (newVal === value) return;
        value = newVal;
        dep.notify();
      }
    })

    if (typeof raw[key] === 'object') { // 递归处理多层级对象
      reactive(raw[key]);
    }
  })

  return raw;
}

const info = reactive({
  counter: 100, name: 'zhangsan', friend: {
    name: 'lisi',
    age: 23
  }
});
const foo = reactive({ bar: 'test' });

watchEffect(function () {
  console.log('effect1: ', info.counter * 2, info.name);
})

watchEffect(function () {
  console.log('effect2: ', info.counter * info.counter, foo.bar);
})

watchEffect(function () {
  console.log('effect3: ', info.counter + 10, info.name);
})

watchEffect(function () {
  console.log('effect4: ', foo.bar);
})

watchEffect(function () {
  console.log('effect5: ', info.friend.name, info.friend.age);
})

info.friend.name = 'zhaoliu';
info.friend.age++;
// foo.bar = 'lilei';
// foo.bar = 'test';
