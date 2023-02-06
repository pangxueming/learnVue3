<template>
  <div>
    <h2>App</h2>
    <h3>{{message}}</h3>
    <button @click="foo">click foo event</button>
  </div>
</template>

<script>
import { demoMixin } from "./mixins/demoMixim";

export default {
  mixins: [demoMixin],
  data() {
    return {
      title: 'Hello World',
      message: 'Hello App'
    }
  },

  methods: {
    foo() {
      console.log('执行app foo');
    }
  },

  created() {
    console.log('执行app created');
  }
};
</script>

<style scoped>
</style>