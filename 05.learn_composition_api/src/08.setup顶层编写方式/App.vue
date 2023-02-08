<template>
  <div>
    <h2>当前计数：{{ counter }}</h2>
    <button @click="decrement">-1</button>
    <button @click="increment">+1</button>

    <br />
    HelloWorld component's message input:<input type="text" v-model="message" />

    <HelloWorld :message="message" @increment="getIncrementCounter" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import HelloWorld from './HelloWorld.vue';

const counter = ref(0);
const message = ref('hello world props');

function increment(params) {
  counter.value++;
}

function decrement() {
  counter.value--;
}

function getIncrementCounter(params) {
  console.log(params);
}
</script>
