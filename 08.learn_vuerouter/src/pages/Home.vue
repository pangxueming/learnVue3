<template>
  <div>
    home

    <ul>
      <li>home 内容1</li>
      <li>home 内容2</li>
      <li>home 内容3</li>
    </ul>


    <router-link to="/home/message" class="mr-20">消息</router-link>
    <router-link to="/home/production" class="mr-20">商品</router-link>
    <router-link to="/home/moment">动态</router-link>
    <router-view />
  </div>
</template>

<script setup>

</script>

<style scoped>
  .mr-20 {
    margin-right: 20px;
  }
</style>