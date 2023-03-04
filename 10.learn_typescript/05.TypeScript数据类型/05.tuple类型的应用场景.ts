// hook: useState
// const [counter, setCounter] = useState(10);

function useState<T>(state: T): [T, (newState: T) => void] {
  let currentState = state;

  let changeState = function (newState: T) {
    currentState = newState;
  }

  return [currentState, changeState]
}

const [counter, setCounter] = useState(20);
console.log('---16', counter);
setCounter(10);
console.log('---18', counter);

const [flag, setFlag] = useState(true);

