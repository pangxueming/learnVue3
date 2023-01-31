<template>
  <div>
    <h2>当前计数： {{ counter }}</h2>

    <counter-operation-cpn @handle-click-btn="handleChangeCounter" />
  </div>
</template>

<script>
import CounterOperationCpn from "./CounterOperation.vue";

export default {
  components: {
    CounterOperationCpn,
  },

  data() {
    return {
      counter: 0,
    };
  },

  methods: {
    handleChangeCounter(count) {
      this.counter += count;
    },
  },
};
</script>

<style scoped>
</style>