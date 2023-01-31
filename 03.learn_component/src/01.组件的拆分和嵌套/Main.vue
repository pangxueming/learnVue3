<template>
  <div class="main">
    <main-banner />
    <main-product-list /> 
  </div>
</template>

<script>
import MainBanner from './MainBanner.vue';
import MainProductList from './MainProductList.vue';

export default {
  name: 'Main',
  components: {
    MainBanner,
    MainProductList
  }
}
</script>

<style scoped>

</style>