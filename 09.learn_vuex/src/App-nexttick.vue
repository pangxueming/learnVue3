<template>
  <div>
    <h2 class="title" ref="titleRef">{{ message }}</h2>

    <button @click="addMessageContent">添加内容</button>
    <button @click="counter++">{{counter}}, +1</button>
  </div>
</template>

<script setup>
import { ref, nextTick, onUpdated } from "vue";

const message = ref('');
const titleRef = ref();
const counter = ref(0);

function addMessageContent() {
  message.value += '哈哈哈哈';

  nextTick(() => {
    console.log(titleRef.value.offsetHeight);
  })
  
}

onUpdated(() => {
  console.log(titleRef.value.offsetHeight);
}) 
</script>

<style scoped>
.title {
  width: 120px;
}
</style>
