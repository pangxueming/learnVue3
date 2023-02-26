<template>
  <div>
    <hr />
    <h2>About</h2>
    <h2>当前计数：{{ $store.state.counter }}</h2>
    <button @click="DECREMENT">-1</button>
    <button @click="INCREMENT">+1</button>
    <button @click="INCREMENT_N(30)">+30</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  setup() {
    const mutations = mapMutations(['INCREMENT', 'INCREMENT_N', "DECREMENT"])

    return {
      ...mutations
    }
  }
}

</script>
