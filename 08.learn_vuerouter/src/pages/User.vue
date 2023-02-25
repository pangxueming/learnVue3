<template>
  <div>
    user:
    <span class="user-name">{{ currentUser }} - {{ currentId }}</span>
    page
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();

const currentUser = computed(() => {
  return route.params.username;
});

const currentId = computed(() => {
  return route.params.id;
});

</script>

<style scoped>
.user-name {
  color: red;
}
</style>
