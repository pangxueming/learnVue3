<template>
  <div>
    <h2>App组件</h2>
    <home></home>
    <async-category></async-category>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import Home from "./Home.vue";
// import AsyncCategory from './AsyncCategory.vue';
import Loading from './Loading.vue';

// const AsyncCategory = defineAsyncComponent(() => import("./AsyncCategory.vue"));
const AsyncCategory = defineAsyncComponent({
  loader: () => import("./AsyncCategory.vue"),
  loadingComponent: Loading,
  // errorComponent: ErrorCpn
  // delay： 在显示loadingComponent之前，等待多长时间
  // delay: 2000 
  /**
   * err: 错误信息
   * retry：一个函数，尝试retry尝试重新加载，使用（retry()）
   * fail：一个函数，指示加载器结束退出
   * attempts：记录最大尝试次数 
   */
  onError: function(err, retry, fail, attempts) {

  }
})

export default {
  components: {
    Home,
    AsyncCategory,
  },
};
</script> 
