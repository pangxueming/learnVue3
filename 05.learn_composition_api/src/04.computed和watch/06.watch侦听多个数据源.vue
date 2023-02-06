<template>
  <div>
    <h2>{{ info.name }}</h2>
    <h2>{{ name }}</h2>
    <button @click="changeData">修改数据</button>
  </div>
</template>

<script>
import { reactive, ref, watch } from "vue";

export default {
  setup() {
    const info = reactive({ name: "zhangsan", age: 24 });
    const name = ref("wangwu");
    watch(
      [() => ({ ...info }), name],
      ([newInfo, newName], [oldInfo, oldName]) => {
        console.log(newInfo, newName, oldInfo, oldName);
      }
    );

    function changeData() {
      name.value = "lisi";
    }

    return {
      info,
      changeData,
      name,
    };
  },
};
</script>