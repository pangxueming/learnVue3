<template>
  <div>
    <h2 v-format-time="'YYYY-MM-DD'">{{ timeStamp }}</h2>
  </div>
</template>

<script setup>
const timeStamp = 1675671400;
</script>
