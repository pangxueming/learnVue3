<template>
  <div>
    <!-- <h2>{{ info.name }}</h2>
    <h2>friend name: {{ info.friend.name }}</h2> -->
    <h2>friend name: {{ friend.name }}</h2>
    <button @click="changeData">修改数据</button>
  </div>
</template>

<script>
import { ref, watch } from "vue";

export default {
  setup() {
    const friend = ref({
      name: "john",
      age: 22,
    });
    const counter = ref(0);

    // 1.侦听ref响应式对象，ref包裹的是引用类型时，侦听器需要侦听re.value
    watch(friend.value, (newVal, oldVal) => {
      console.log("newVal :", newVal, "oldVal :", oldVal);
    });

    // 2.ref响应式对象不能直接侦听，需要侦听getter函数（返回响应式对象的属性值），
    // watch(friend.value.name, (newVal, oldVal) => {
    //   console.log("newVal :", newVal, "oldVal :", oldVal);
    // })

    watch(
      () => friend.value.name,
      (newVal, oldVal) => {
        console.log("newVal :", newVal, "oldVal :", oldVal);
      }
    );

    // 3.ref包裹的是一个基本数据类型时，直接侦听该ref响应式对象即可
    watch(counter, (newVal, oldVal) => {
      console.log("newVal :", newVal, "oldVal :", oldVal);
    });

    function changeData() {
      friend.value.name = "jack";
      counter.value++;
    }

    return {
      changeData,
      friend,
    };
  },
};
</script>
