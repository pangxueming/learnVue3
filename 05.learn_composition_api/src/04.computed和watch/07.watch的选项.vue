<template>
  <div>
    <h2>{{ info.name }}</h2>
    <h2>friend name: {{info.friend.name}}</h2>
    <button @click="changeData">修改数据</button>
  </div>
</template>

<script>
import { reactive, ref, watch } from "vue";

export default {
  setup() {
    const info = reactive({
      name: "zhangsan",
      age: 24,
      friend: {
        name: "lisi",
        age: 23,
      },
    });

    watch(
      () => ({ ...info }),
      (newInfo, oldInfo) => {
        console.log(newInfo, oldInfo);
      },
      {
        deep: true,
        immediate: true
      }
    );

    function changeData() {
      info.friend.name = "zhaoliu";
    }

    return {
      info,
      changeData,
    };
  },
};
</script>
