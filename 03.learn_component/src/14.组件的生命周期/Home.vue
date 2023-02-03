<template>
  <div>
    <h2>home</h2>
    <h3>当前计数： {{counter}}</h3>
    <button @click="counter++">+1</button>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      counter: 1
    }
  },

  // 生命周期更新是在dom更新是触发 
  beforeCreate() {
    console.log("home beforeCreate");
  },

  created() {
    console.log('home created');
  },

  beforeMount() {
    console.log('home beforeMount');
  },

  mounted() {
    console.log('home mounted');
  },

  beforeUpdate() {
    console.log('home beforeUpdate');
  },

  updated() {
    console.log('home updated');
  },

  beforeUnmount() {
    console.log('home beforeunmount');
  },

  unmounted() {
    console.log('home unmounted');
  }

  // activated和deactivated是缓存组件的两个生命周期函数
};
</script>

<style scoped>
</style>