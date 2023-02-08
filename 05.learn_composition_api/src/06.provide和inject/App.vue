<template>
  <div>
    <home />

    <h2>app counter: {{ counter }}</h2>
    <button @click="counter++">app +1</button>
  </div>
</template>

<script>
import { provide, ref, readonly } from "vue";
import Home from "./Home.vue";

export default {
  components: {
    Home,
  },

  setup() {
    const name = ref("zhangsan");
    const counter = ref(0);

    provide("name", readonly(name));
    provide("counter", readonly(counter));

    return {
      name,
      counter,
    };
  },
};
</script>

<style scoped>
</style>