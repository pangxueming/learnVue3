<template>
  <div>
    <h2>Home page</h2>

    <!-- 当我们在template模版钟使用ref对象，它会自动进行解包 -->
    <h2>当前计数counter：{{ counter }}</h2>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const counter = ref(0);

    function increment() {
      counter.value++;
    }

    return {
      increment,
      counter,
    };
  },
};
</script>

<style scoped>
</style>