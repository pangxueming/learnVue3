<template>
  <div>
    about
    <h2>name: {{ name }} - age: {{ age }}</h2>

    <h2>当前计数： {{ counter }}</h2>
    <button @click="increment">+1</button>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const counter = ref(0);
const name = computed(() => {
  return route.query.name;
});

const age = computed(() => {
  return route.query.age;
});

function increment() {
  counter.value++;
}

</script>
