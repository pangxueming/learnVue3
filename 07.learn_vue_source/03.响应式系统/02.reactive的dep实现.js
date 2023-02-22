class Dep {
  constructor() {
    this.subcribers = new Set();
  }

  addEffect(effect) {
    this.subcribers.add(effect);
  }

  notify() {
    this.subcribers.forEach(effect => {
      effect();
    })
  }
}

const dep = new Dep();

const info = { counter: 100 };

function doubleCounter() {
  console.log(info.counter * 2);
  return info.counter * 2;
}

function powerCounter() {
  console.log(info.counter * info.counter);
  return info.counter * info.counter;
}

dep.addEffect(doubleCounter);
dep.addEffect(powerCounter);

info.counter++;
dep.notify();