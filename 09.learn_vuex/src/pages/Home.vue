<template>
  <div>
    <h2>当前计数root：{{ $store.state.rootCounter }}</h2>
    <h2>当前计数home：{{ $store.state.homeModule.homeCounter }}</h2>
    <h2>当前计数user：{{ $store.state.userModule.userCounter }}</h2>

    <h2>doubleHomeCounter: {{ $store.getters['homeModule/doubleHomeCounter'] }}</h2>
    <hr />

    <button @click="homeIncrement">home+1</button>
    <button @click="homeIncrementActions">home actions+1</button>

  </div>
</template>

<script>
export default {
  methods: {
    homeIncrement() {
      this.$store.commit('homeModule/increment');
    },

    homeIncrementActions() {
      this.$store.dispatch('homeModule/incrementActions')
    }
  }
}
</script>
