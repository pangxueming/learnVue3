<template>
  <div>
    <button
      v-for="tab in tabs"
      :key="tab"
      @click="clickTab(tab)"
      :class="{ active: curTab === tab }"
    >
      {{ tab }}
    </button>

    <!-- 2.动态组件 -->
    <!-- 2.1 注意，在使用component标签时，如果使用单标签传递值，那么传递给到子组件的值是作为子组件的属性值（$attrs）,
             如果使用component双标签则传递过去的是props
    -->

    <!-- keep-alive组件
          **搭配组件实例的name属性
          include属性，对应的属性值会缓存组件状态，
          exclude属性，对应的属性值不会缓存组件状态
          max属性，可以缓存最大的组件实例
     -->
    <keep-alive include="home,about">
      <component :is="curTab" name="zhangsan" :age="13" @page-click="pageClick">
      </component>
    </keep-alive>
  </div>
</template>

<script>
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import Category from "./pages/Category.vue";

export default {
  components: {
    Home,
    About,
    Category,
  },
  data() {
    return {
      tabs: ["home", "about", "category"],
      curTab: "home",
    };
  },

  methods: {
    clickTab(tab) {
      this.curTab = tab;
    },

    pageClick(info) {
      console.log(info);
    },
  },
};
</script>

<style scoped>
.active {
  background-color: pink;
}
</style>