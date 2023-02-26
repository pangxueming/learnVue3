<template>
  <div>
    <h2>总价值： {{ $store.getters.totalPrice }}</h2>
    <h2>总价值： {{ totalPrice }}</h2>
    <h2>折扣价值： {{ discountPrice }}</h2>
    <h2>数量大于2的总价值： {{ totalPriceCountGreaterN(3) }}</h2>

    <h2>getters 辅助函数 对象模式: {{ sTotalPrice }}</h2>

    <button @click="sellBook">sellBook</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['totalPrice', 'discountPrice', 'totalPriceCountGreaterN']),
    ...mapGetters({
      sTotalPrice: 'totalPrice'
    })
  },

  methods: {
    sellBook() {
      this.$store.commit('SELL_BOOK');
    }
  }
}
</script>
