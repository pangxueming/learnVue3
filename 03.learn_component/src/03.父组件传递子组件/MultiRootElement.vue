<template>
  <!-- 多根节点的attribute
        多根节点的attribute如果没有显式的绑定，那么就会报警告，我们需要手动指定绑定到哪一个元素
   -->
  <h2 v-bind="$attrs">MultiRootElement1</h2>
  <h2>MultiRootElement2</h2>
  <h2>MultiRootElement3</h2>
</template>

<script>
export default {};
</script>

<style scoped>
</style>