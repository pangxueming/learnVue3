<template>
  <div>
    <h2>{{ name }}</h2>
    <h2>home当前计数：{{ counter }}</h2>

    <button @click="counter++">home +1</button>
  </div>
</template>

<script>
import { inject } from "vue";
export default {
  setup() {
    const name = inject("name");
    const counter = inject("counter");

    return {
      name,
      counter,
    };
  },
};
</script>

<style scoped>
</style>