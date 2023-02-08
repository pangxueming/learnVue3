import { ref, computed } from 'vue';

export default function () {
  const counter = ref(0);
  const doubleCounter = computed(() => {
    return counter.value * 2;
  });

  function increment() {
    counter.value++;
  }

  function decrement() {
    counter.value--;
  }

  return {
    counter,
    doubleCounter,
    increment,
    decrement
  }
}
