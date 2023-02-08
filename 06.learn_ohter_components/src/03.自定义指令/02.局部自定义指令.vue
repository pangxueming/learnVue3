<template>
  <div>
    <input type="text" v-focus />
  </div>
</template>

<!-- <script setup>
// 1.在setup中使用局部自定义指令
const vFocus = {
  mounted: (el) => el.focus()
}
</script> -->

<script>
// 2.在组件中使用局部指令
export default {
  directives: {
    // 自定义指令名称
    focus: {
      mounted: (el, bindings, vnode, preVnode) => el.focus()
    }
  }
}
</script>
