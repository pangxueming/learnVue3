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
    watchEffect(() => {
      console.log("name: ", name.value, "age: ", age.value);
    });

    function changeName() {
      name.value = "lisi";
    }

    function changeAge() {
      age.value++;
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