<template>
  <div>
    <h2>category</h2>
  </div>
</template>

<script>
export default {
  name: "category",
  beforeCreate() {
    console.log("category beforeCreate");
  },

  created() {
    console.log("category created");
  },

  beforeMount() {
    console.log("category beforeMount");
  },

  mounted() {
    console.log("category mounted");
  },

  beforeUpdate() {
    console.log("category beforeUpdate");
  },

  updated() {
    console.log("category updated");
  },

  beforeUnmount() {
    console.log("category beforeunmount");
  },

  unmounted() {
    console.log("category unmounted");
  },
};
</script>

<style scoped>
</style>