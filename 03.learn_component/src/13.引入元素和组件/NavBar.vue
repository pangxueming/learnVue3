<template>
  <div>
    <h2>nav-bar cpn</h2>

    <button @click="getParentAndRoot">获取父组件和跟组件</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message: '我是NavBar中的message'
      }
    },

    methods: {
      sayHello() {
        console.log(`saying hello ${this.message}`);
      },

      getParentAndRoot() {
        console.log(this.$parent);
        console.log(this.$root);
      }
    }
  }
</script>

<style scoped>

</style>