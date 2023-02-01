<template>
  <div>
    <button @click="btnClick">btnClick</button>
  </div>
</template>

<script>
import mitter from "./utils/eventBus";

export default {
  methods: {
    btnClick() {
      mitter.emit('btnClickEvent1', {name: 'zhangsan', age: 25});
      // mitter.emit('btnClickEvent2', {name: 'lisi', age: 26});
    },
  },
};
</script>

<style scoped>
</style>