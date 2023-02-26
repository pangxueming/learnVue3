<template>
  <div>
    <h2>当前计数：{{ $store.state.counter }}</h2>
    <button @click="incrementAction">+1</button>
    <button @click="decrementAction">-1</button>

    <button @click="add">+1</button>
    <button @click="sub">-1</button>

    <h2>banner</h2>
    <ul>
      <li v-for="banner in $store.state.bannerLists">
        {{ banner.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    // ...mapActions(['incrementAction', 'decrementAction']),
    // ...mapActions({
    //   add: 'incrementAction',
    //   sub: 'decrementAction'
    // })
  },

  setup() {
    const actions1 = mapActions(['incrementAction', 'decrementAction']);
    const actions2 = mapActions({
      add: 'incrementAction',
      sub: 'decrementAction'
    })

    return {
      ...actions1,
      ...actions2
    }
  }
}
</script>
