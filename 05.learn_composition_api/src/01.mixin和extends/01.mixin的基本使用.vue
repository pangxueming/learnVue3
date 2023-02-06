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
  mixins: [demoMixin]
};
</script>

<style scoped>
</style>