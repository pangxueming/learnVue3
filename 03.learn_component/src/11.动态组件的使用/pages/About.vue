<template>
  <div>
    <h2>About</h2>
    <button @click="counter++">当前计数：{{ counter }}</button>
  </div>
</template>

<script>
export default {
  name: "about",
  data() {
    return {
      counter: 0,
    };
  },

  created() {
    console.log("about created");
  },

  unmounted() {
    console.log("about unmounted");
  },

  // 针对缓存组件，有activated，deactivated两个生命周期函数
  activated() {
    console.log('about activated');
  },

  deactivated() {
    console.log('about deactivated');
  },
};
</script>

<style scoped>
</style>