<template>
  <h2>我是vueapp</h2>
  <h3>{{ title }}</h3>

  <hello-world></hello-world>
</template>

<script>
import HelloWorld from './HelloWorld.vue';

export default {
  components: {
    HelloWorld
  },
  
  data() {
    return {
      title: 'hello wolrd'
    }
  },

  created() {
    setTimeout(() => {
      this.title += ', this is a vueapp title!'
    }, 3000);
  }
}
</script>

<style scoped>
h2 {
  color: red;
}
</style>
