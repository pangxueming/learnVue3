<template>
  <div>
    <home />
    <button @click="addName">+name</button>
  </div>
</template>

<script>
import { computed } from "vue";
import Home from "./Home.vue";

export default {
  components: {
    Home,
  },

  provide() {
    return {
      name: "zhangsan",
      age: 24,
      nameLength: computed(() => this.names.length), // ref对象
    };
  },

  data() {
    return {
      names: ["abc", "cba", "nba"],
    };
  },

  methods: {
    addName() {
      this.names.push("lisi");
    },
  },
};
</script>

<style scoped>
</style>