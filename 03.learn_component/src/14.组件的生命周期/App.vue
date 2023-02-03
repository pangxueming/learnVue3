<template>
  <div>
    <h2>App</h2>
    <button @click="toggle">当前是： {{ curCpnName }}组件</button>
    <component :is="curCpnName"></component>
  </div>
</template>

<script>
import Home from "./Home.vue";
import Category from './Category.vue'

export default {
  components: {
    Home,
    Category
  },
  data() {
    return {
      curCpnName: "home",
    };
  },

  methods: {
    toggle() {
      if (this.curCpnName === "home") {
        this.curCpnName = "category";
      } else {
        this.curCpnName = "home";
      }
    },
  },
};
</script>

<style scoped>
</style>