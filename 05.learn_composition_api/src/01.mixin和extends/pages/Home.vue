<template>
  <div>
    <h2>Hello Home</h2>
    <h3>{{ title }}</h3>

    <h3>{{ content }}</h3>

    <button @click="foo">触发extends组件的foo事件</button>
  </div>
</template>

<script>
import BasePage from "./BasePage.vue";

export default {
  // 继承只能继承组件的选项，不能继承模版
  extends: BasePage,
  data() {
    return {
      content: "hello home",
    };
  },
};
</script>

<style scoped>
</style>