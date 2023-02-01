<template>
  <nav-bar :name='name'>
    <template #left>
      <button>左边按钮</button>
    </template>

    <template #center>
      <h2>我是标题</h2>
    </template>

    <template #right>
      <i>右边i元素</i>
    </template>

    <template #[name]>
      <i>dynamicSlot</i>
    </template>
  </nav-bar>
</template>

<script>
import NavBar from "./NavBar.vue";

export default {
  components: {
    NavBar,
  },

  data() {
    return {
      name: 'dynamicSlot'
    }
  }
};
</script>

<style scoped>
</style>