<template>
  <div>
    <!-- 1.html元素上的模板引用 -->
    <h2 ref="refEle">哈哈哈</h2>
    <!-- 2.组件上的模版引用 -->
    <nav-bar ref="navBarRef"></nav-bar>

    <button @click="btnClick">获取元素</button>
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";

export default {
  components: {
    NavBar,
  },

  data() {
    return {
      names: ['abc', 'cba', 'nba']
    }
  },

  methods: {
    btnClick() {
      console.log(this.$refs.refEle);
      console.log(this.$refs.navBarRef);
      console.log(this.$refs.navBarRef.message);
      this.$refs.navBarRef.sayHello();

      // $el
      console.log(this.$refs.navBarRef.$el);
    },
  },
};
</script>

<style scoped>
</style>