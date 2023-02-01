<template>
  <div>
    <ul>
      <li v-for="(name, index) in names" :key="name">
        <!-- 在slot标签上绑定属性，可以传递到父级插槽，这种用法叫做作用域插槽 -->
        <slot :item="name" :index="index" /> 
        <slot name="slotName" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    names: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
</style>