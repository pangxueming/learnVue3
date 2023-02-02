<template>
  <div>
    <h2>category</h2>
    <button @click="counter++">当前计数：{{counter}}</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        counter: 0
      }
    }
  }
</script>

<style scoped>

</style>