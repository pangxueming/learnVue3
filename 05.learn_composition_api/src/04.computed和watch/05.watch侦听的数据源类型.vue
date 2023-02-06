<template>
  <div>
    <h2>{{ info.name }}</h2>
    <h2>{{ name }}</h2>
    <h2>person.grade: {{person.grade}}</h2>
    <button @click="changeData">修改数据</button>
  </div>
</template>

<script>
import { reactive, ref, watch } from "vue";

export default {
  setup() {
    const info = reactive({ name: "zhangsan", age: 24 });

    // 1.侦听时，传入一个getter函数
    // watch(
    //   () => info.name,
    //   (newVal, oldVal) => {
    //     console.log("newVal: ", newVal, "oldVal: ", oldVal);
    //   }
    // );

    // 2.传入一个可响应式对象：reactive对象或ref对象
    // 情况一： reactive对象获取到的newVal和oldVal本身都是reactive对象
    // watch(info, (newVal, oldVal) => {
    //   console.log("newVal: ", newVal, "oldVal: ", oldVal);
    // });

    // 如果希望newVal和oldVal是一个普通的对象
    // watch(
    //   () => ({ ...info }),
    //   (newVal, oldVal) => {
    //     console.log("newVal: ", newVal, "oldVal: ", oldVal);
    //   }
    // );

    // 情况二：ref对象获取newVal和oldVal是value值的本身
    const name = ref("wangwu");
    const person = ref({
      char: "student",
      grade: 2,
    });
    watch(name, (newVal, oldVal) => {
      console.log("newVal: ", newVal, "oldVal: ", oldVal);
    });
    watch(person.value, (newVal, oldVal) => {
      console.log("newVal: ", newVal, "oldVal: ", oldVal);
    });

    function changeData() {
      // name.value = "lisi";
      // console.log(name);
      person.value.grade = 3;
      console.log(person);
    }

    return {
      info,
      changeData,
      name,
      person
    };
  },
};
</script>
