<template>
  <div>
    <h2>当前计数：{{ $store.state.counter }}</h2>
    <button @click="actions1.incrementAction">+1</button>
    <button @click="actions1.decrementAction">-1</button>

    <button @click="actions2.add">+1</button>
    <button @click="actions2.sub">-1</button>

    <h2>banner</h2>
    <ul>
      <li v-for="banner in $store.state.bannerLists">
        {{ banner.title }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useActions } from '../hook';

const actions1 = useActions(['incrementAction', 'decrementAction']);
const actions2 = useActions({
  add: 'incrementAction',
  sub: 'decrementAction'
})

</script>
