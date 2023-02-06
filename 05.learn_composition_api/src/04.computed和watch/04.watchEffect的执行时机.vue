<template>
  <div>
    <h2 ref="title">哈哈哈哈</h2>
  </div>
</template>

<script>
import { ref, watchEffect } from "vue";

export default {
  setup() {
    const title = ref(null);

    watchEffect(() => {
      console.log(title.value);
    },
    {
      
      /**
       * flush（副作用执行时机）:
       * 默认值 pre： 它会在元素挂载或更新之前执行
       *       post：等dom执行完再执行，用到dom是用这个参数
       *       sync：这将强制效果始终同步触发。然而，这是低效的，这应该很少需要 
       */
      flush: 'post' 
    });
    return {
      title,
    };
  },
};
</script>

<style scoped>
</style>