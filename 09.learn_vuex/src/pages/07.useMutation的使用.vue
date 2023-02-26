<template>
  <div>
    <h2>当前计数： {{ $store.state.counter }}</h2>

    <button @click="$store.commit('INCREMENT')">+1</button>
    <button @click="$store.commit('DECREMENT')">-1</button>
    <button @click="mutations.DECREMENT">-1</button>
    <button @click="mutations.INCREMENT_N(20)">+10</button>
  </div>
</template>

<script setup>
import { INCREMENT_N } from '../store/mutation-types';
import { useMutation } from '../hook';

// 奇怪需要自己手动绑定store，但是setup函数不需要，setup顶层标签就需要
const mutations = useMutation([INCREMENT_N, 'DECREMENT']);
</script>
