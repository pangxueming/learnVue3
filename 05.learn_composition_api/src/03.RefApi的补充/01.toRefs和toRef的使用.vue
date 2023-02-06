<template>
  <div>
    <!-- <h2>{{ info.name }} - {{ info.age }}</h2> -->

    <h2>info.age: {{ info.age }}</h2>
    <h2>infoAge: {{ infoAge }}</h2>

    <button @click="changeAge">changeAge</button>
  </div>
</template>

<script>
import { reactive, toRefs, toRef } from "vue";

export default {
  setup() {
    const info = reactive({ name: "zhangsan", age: 24 });
    // 1.toRefs: 将reactive对象中的所有属性都转换成ref，建立连接
    // const { name: infoName, age: infoAge } = toRefs(info);
    // 2.toRef: 对其中一个属性进行转换ref，建立连接（获取一个属性的时候，用这个api性能更好）
    // toRef: (object, key), return refValue
    const infoAge = toRef(info, "age");
    console.log(infoAge);

    function changeAge() {
      // info.age++;
      infoAge.value++;
    }

    return {
      info,
      infoAge,
      changeAge,
    };
  },
};
</script>
