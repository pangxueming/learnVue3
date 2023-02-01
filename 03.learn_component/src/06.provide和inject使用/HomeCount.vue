<template>
  <div>
    <h2>{{ name }}</h2>
    <h2>{{ age }}</h2>
    <h2>{{ nameLength }}</h2>
  </div>
</template>

<script>
export default {
  inject: ["name", "age", "nameLength"],
};
</script>

<style scoped>
</style>