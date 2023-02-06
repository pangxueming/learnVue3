<template>
  <div>
    <h2>Home page</h2>

    <h2>当前计数：{{state.counter}}</h2>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
import { reactive } from 'vue';

export default {
  setup() {

    let state = reactive({counter:0});

    function increment () {
      state.counter++;
      console.log(state.counter);
    }


    return {
      state,
      increment,
      counter
    }
  },
};
</script>

<style scoped>
</style>