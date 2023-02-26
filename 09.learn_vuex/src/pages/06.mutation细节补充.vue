<template>
  <div>
    <h2>当前计数： {{ $store.state.counter }}</h2>

    <button @click="$store.commit('INCREMENT')">+1</button>
    <button @click="$store.commit('DECREMENT')">-1</button>
    <button @click="addTen">+10</button>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { INCREMENT_N } from '../store/mutation-types';

const store = useStore();

function addTen() {
  store.commit(INCREMENT_N, 10)
}
</script>
