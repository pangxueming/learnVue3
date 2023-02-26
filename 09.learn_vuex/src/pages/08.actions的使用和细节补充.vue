<template>
  <div>
    <h2>当前计数：{{ $store.state.counter }}</h2>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>

    <h2>banner</h2>
    <ul>
      <li v-for="banner in $store.state.bannerLists">
        {{ banner.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    increment() {
      this.$store.dispatch('incrementAction', { counter: 100 });
    },

    decrement() {
      this.$store.dispatch('decrementAction', { counter: 100 })
    }
  }
}
</script>
