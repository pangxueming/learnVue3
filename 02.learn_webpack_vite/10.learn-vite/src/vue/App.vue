<template>
  <h2 class="h2">{{ message }}</h2>

  <HelloWorld></HelloWorld>
</template>

<script>
import HelloWorld from './HelloWorld.vue';

export default {
  components: {
    HelloWorld,
  },
  data() {
    return {
      message: 'hello world1111'
    }
  }
}
</script>

<style scoped>
.h2 {
  color: red;
}
</style>
