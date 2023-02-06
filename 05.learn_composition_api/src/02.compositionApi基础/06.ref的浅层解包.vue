<template>
  <div>
    <h2>Home page</h2>

    <!-- 当我们在template模版钟使用ref对象，它会自动进行解包 -->
    <h2>当前计数counter：{{ counter }}</h2>
    <!-- ref的解包只能是一个浅层解包 -->
    <h2>当前计数：{{ info.counter + 1 }}</h2>
    <!-- 当最外层包裹的是一个reactive可响应式对象，那么内容的ref可以解包 -->
    <h2>当前计数：{{ reactiveInfo.counter + 2 }}</h2>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
import { ref, reactive } from "vue";

export default {
  setup() {
    const counter = ref(0);
    const info = {
      counter,
    };

    const reactiveInfo = reactive({
      counter,
    });

    function increment() {
      counter.value++;
    }

    return {
      increment,
      counter,
      info,
      reactiveInfo
    };
  },
};
</script>
