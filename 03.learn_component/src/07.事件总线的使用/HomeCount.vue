<template>
  <div></div>
</template>

<script>
import mitter from "./utils/eventBus";

export default {
  created() {
    mitter.on("btnClickEvent1", this.btnClickEvent1Fn);

    mitter.on("*", this.mitterAllFn);
  },

  methods: {
    btnClickEvent1Fn(info) {
      console.log(info);
    },

    mitterAllFn(type, info) {
      console.log(type, info);
    },
  },

  destroyed() {
    mitter.all.clear();
  },
};
</script>

<style scoped>
</style>