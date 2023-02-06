<template>
  <div>
    <h2>{{ counter }}</h2>
    <h2>counter * 2：{{ counter * 2 }}</h2>
    <h2>{{ doubleCounter }}</h2>
    <button @click="decrement">-1</button>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },

  computed: {
    doubleCounter() {
      return this.counter * 2;
    },
  },

  methods: {
    decrement() {
      this.counter--;
    },
    increment() {
      this.counter++;
    },
  },
};
</script>

<style scoped>
</style>