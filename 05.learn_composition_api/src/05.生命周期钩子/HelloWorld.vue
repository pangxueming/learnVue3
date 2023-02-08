<template>
  <div></div>
</template>

<script>
import { onMounted } from "vue";
export default {
  setup() {
    onMounted(() => {
      console.log('hello world onMounted');
    })
  },
};
</script>

<style scoped>
</style>