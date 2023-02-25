<template>
  <h2 style="display: inline-block;">title: {{ title }}</h2>
</template>

<script setup>
const props = defineProps({
  title: String
})
</script>
