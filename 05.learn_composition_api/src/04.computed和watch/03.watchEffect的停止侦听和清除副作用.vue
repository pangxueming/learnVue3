<template>
  <div>
    <h2>{{ name }} - {{ age }}</h2>
    <button @click="changeName">changeName</button>
    <button @click="changeAge">changeAge</button>
  </div>
</template>

<script>
import { ref, watchEffect } from "vue";
export default {
  setup() {
    const name = ref("zhangsan");
    const age = ref(18);

    // watchEffect: 自动收集响应式的依赖
    const stop = watchEffect((onCleanUp) => {
      // 根据name和age两个变量发送网络请求
      let timer = setTimeout(() => {
        console.log("网络请求成功！");
      }, 2000);

      onCleanUp(() => {
        // 在这个函数中清除额外的副作用
        // request.cancel();
        console.log("onCleanUp");
        clearTimeout(timer);
      });
      console.log("name: ", name.value, "age: ", age.value);
    });

    function changeName() {
      name.value = "lisi";
    }

    function changeAge() {
      age.value++;

      if (age.value > 25) stop();
    }

    return {
      name,
      age,
      changeName,
      changeAge,
    };
  },
};
</script>

<style scoped>
</style>