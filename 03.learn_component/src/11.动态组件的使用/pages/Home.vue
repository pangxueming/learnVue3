<template>
  <div>
    <h2>home</h2>
    <h3>{{name}}</h3>
    <h3>{{age}}</h3>

    <button @click="pageClick">pageClick</button>
  </div>
</template>

<script>
  export default {
    name: 'home',
    emits: ['pageClick'],
    props: {
      name: {
        type: String,
        default: ''
      },

      age: {
        type: Number,
        default: 0
      }
    },

    methods: {
      pageClick() {
        this.$emit('pageClick', {name: 'lisi', age: 30});
      }
    }
  }
</script>

<style scoped>

</style>