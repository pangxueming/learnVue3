<template>
  <div>
    <h2>Home page</h2>

    <button @click="updateInfo">updateInfo</button>
  </div>
</template>

<script>
import { ref, readonly } from "vue";

export default {
  setup() {
    // 1.普通对象
    const info1 = {
      name: "zhangsan",
      age: 34,
    };
    const readonlyInfo1 = readonly(info1);

    // 2.响应式对象reactive
    const info2 = ref({
      name: "zhangsan",
      age: 34,
    });
    const readonlyInfo2 = readonly(info2);

    // 3.响应式对象ref
    const info3 = ref("zhangsan");
    const readonlyInfo3 = readonly(info3);

    function updateInfo() {
      // readonlyInfo1.name = "lisi";
      // readonlyInfo2.name = 'lisi';
      // info2.value.name = "lisi";
      readonlyInfo3.value = 'lisi';

      // console.log(readonlyInfo2.value);
    }

    return {
      updateInfo,
    };
  },
};
</script>
