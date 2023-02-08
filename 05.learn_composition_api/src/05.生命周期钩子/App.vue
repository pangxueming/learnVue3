<template>
  <div>
    <h2>当前计数： {{ counter }}</h2>
    <button @click="counter++">+1</button>

    <button @click="isShow = !isShow">toggle</button>
    <template v-if="isShow">
      <hello-world></hello-world>
    </template>
  </div>
</template>

<script>
import { onMounted, onBeforeMount, onUpdated, onUnmounted, ref } from "vue";
import HelloWorld from "./HelloWorld.vue";

export default {
  components: {
    HelloWorld,
  },
  setup() {
    const counter = ref(0);
    const isShow = ref(true);

    onMounted(() => {
      console.log("onMounted");
    });

    onBeforeMount(() => {
      console.log("onBeforeMount");
    });

    onUpdated(() => {
      console.log("onUpdated");
    });

    onUnmounted(() => {
      console.log("onUnmounted");
    });

    return {
      counter,
      isShow
    };
  },
};
</script>

<style scoped>
</style>