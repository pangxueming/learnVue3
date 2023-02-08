<template>
  <div class="page">
    <h2>当前计数： {{ counter }}</h2>
    <h2>counter * 2： {{ doubleCounter }}</h2>

    <button @click="decrement">-1</button>
    <button @click="increment">+1</button>
    <br />

    localStorage data <input type="text" v-model="data" />
    <div class="scroll">
      <div class="scroll-x">x: {{ scrollX }}</div>
      <div class="scroll-y">y: {{ scrollY }}</div>
    </div>

    <div class="mouse">
      <div class="scroll-x">mouse x: {{ mouseX }}</div>
      <div class="scroll-y">mouse y: {{ mouseY }}</div>
    </div>
  </div>
</template>

<script>
import {
  useCounter,
  useTitle,
  useSrcollPostion,
  useMousePosition,
  useLocalStorage,
} from "./hooks";

export default {
  setup() {
    const { counter, doubleCounter, decrement, increment } = useCounter();
    const { titleRef } = useTitle();
    const { scrollX, scrollY } = useSrcollPostion();
    const { mouseX, mouseY } = useMousePosition();
    const { data } = useLocalStorage("name", "zhangsan");

    setTimeout(() => {
      titleRef.value = "修改后的title值";
    }, 3000);

    return {
      counter,
      doubleCounter,
      decrement,
      increment,
      scrollX,
      scrollY,
      mouseX,
      mouseY,
      data,
    };
  },
};
</script>

<style scoped>
.page {
  width: 200%;
  height: 300vh;
  position: relative;
}

.scroll {
  position: fixed;
  bottom: 100px;
  left: 10px;
}

.mouse {
  position: fixed;
  bottom: 200px;
  left: 10px;
}
</style>
