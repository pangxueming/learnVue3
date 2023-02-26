<template>
  <div>
    <h2> Home: {{ $store.state.counter }} </h2>
    <h2> Home: {{ homeCounter }} </h2>

    <hr />
    <h2>sCounter: {{ sCounter }}</h2>
    <h2>sName: {{ sName }}</h2>
    <h2>sAge: {{ sAge }}</h2>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import useState from '../hook/useState';

const state1 = useState(['counter', 'name', 'age']);
const { sCounter, sName, sAge } = useState({
  sCounter: state => state.counter,
  sName: state => state.name,
  sAge: state => state.age
})

const homeCounter = computed(() => {
  return state1.counter;
})
</script>
