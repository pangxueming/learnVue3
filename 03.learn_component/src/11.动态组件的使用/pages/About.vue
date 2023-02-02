<template>
  <div>
    <h2>About</h2>
    <button @click="counter++">当前计数：{{counter}}</button>
  </div>
</template>

<script>
  export default {
    name: 'about',
    data() {
      return {
        counter: 0
      }
    }
  }
</script>

<style scoped>

</style>