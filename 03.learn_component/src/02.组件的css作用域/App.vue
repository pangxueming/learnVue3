<template>
  <!-- 通过添加一个div元素包裹解决 -->
  <div>
    <h2>app component's text color is blue</h2>

    <hello-world />
  </div>
</template>

<script>
import HelloWorld from "./HelloWorld.vue";

export default {
  components: {
    HelloWorld,
  },
};
</script>

<style scoped>
h2 {
  color: blue;
}
</style>