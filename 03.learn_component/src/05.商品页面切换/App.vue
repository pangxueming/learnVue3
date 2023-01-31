<template>
  <div>
    <tab-control :headers="headers" @title-click="titleClick" />
    <h2>{{ contents[currentIndex] }}</h2>
  </div>
</template>

<script>
import TabControl from "./TabControl.vue";

export default {
  components: {
    TabControl,
  },

  data() {
    return {
      currentIndex: 0,
      headers: ["衣服", "鞋子", "裤子"],
      contents: ["衣服页面", "鞋子页面", "裤子页面"],
    };
  },

  methods: {
    titleClick(index) {
      this.currentIndex = index;
    },
  },
};
</script>
 