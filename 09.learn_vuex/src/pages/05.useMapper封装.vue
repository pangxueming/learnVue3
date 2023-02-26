<template>
  <div>
    <h2>总价值： {{ $store.getters.totalPrice }}</h2>
    <h2>总价值： {{ getters.totalPrice }}</h2>
    <h2>折扣价值： {{ getters.discountPrice }}</h2>
    <!-- 有点奇怪，不能正常解包getter里面返回的函数 -->
    <h2>数量大于2的总价值： {{ getters.totalPriceCountGreaterN.value(3) }}</h2>

    <!-- <h2>getters 辅助函数 对象模式: {{ sTotalPrice }}</h2> -->

    <button @click="sellBook">sellBook</button>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { useState } from '../hook';

const store = useStore();

const getters = useState(['totalPrice', 'discountPrice', 'totalPriceCountGreaterN']);

function sellBook() {
  store.commit('SELL_BOOK');
}

</script>
