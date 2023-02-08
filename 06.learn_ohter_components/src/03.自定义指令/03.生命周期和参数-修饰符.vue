<template>
  <div>
    <template v-if="isShow">
      <h2 v-updateCounter.aaa.bbb="'zhangsan'">当前计数： {{ counter }}</h2>
    </template>

    <button @click="counter--">-1</button>
    <button @click="counter++">+1</button>
    <button @click="toggle">toggle</button>

  </div>
</template>

<script setup>
import { ref } from 'vue';


const counter = ref(1);
const isShow = ref(true);

function toggle() {
  isShow.value = !isShow.value;
}

// 1.在setup中使用局部自定义指令
const vUpdateCounter = {
  // 提供了beforeMounted、mounted、beforeUpdate、updated、beforeUnmount、unmounted生命周期钩子
  created: (el, bindings, vnode, prevVnode) => console.log('created'),
  beforeMounted: (el, bindings, vnode, prevVnode) => console.log('beforeMounted'),
  mounted: (el, bindings, vnode, prevVnode) => console.log('mounted', bindings, bindings.value, bindings.modifiers),
  beforeUpdate: (el, bindings, vnode, prevVnode) => console.log('beforeUpdate'),
  updated: (el, bindings, vnode, prevVnode) => console.log('updated'),
  beforeUnmount: (el, bindings, vnode, prevVnode) => console.log('beforeUnmount'),
  unmounted: (el, bindings, vnode, prevVnode) => console.log('unmounted'),
}
</script>
