<template>
  <div>
    <Teleport to="#new-app">
      <h2>当前计数：{{ counter }}</h2>
      <button @click="increment">+1</button>
    </Teleport>

    <Teleport to="#new-app">
      <HelloWorld></HelloWorld>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, onMounted, getCurrentInstance } from 'vue';
import HelloWorld from './HelloWorld.vue';

const counter = ref(0);

const instance = getCurrentInstance();
console.log(instance.appContext.config.globalProperties.$description);
// or
// const {proxy} = getCurrentInstance();
// console.log(proxy.$description);

function increment() {
  counter.value++;
}

onMounted(() => {
  // console.log(proxy.$description);
  console.log(instance.appContext.config.globalProperties.$description);
}) 
</script>