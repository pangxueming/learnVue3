<template>
  <div>
    <input type="text" v-model="modelMessage" />
    <h2>{{message}}</h2>

    <input type="text" v-model="modelTitle" />
    <h2>{{title}}</h2>
  </div>
</template>

<script>
export default {
  props: ["message",'title'],
  emits: ["update:message", 'update:title'],
  computed: {
    modelMessage: {
      get() {
        return this.message;
      },
      set(value) {
        this.$emit("update:message", value);
      },
    },

    modelTitle: {
      get() {
        return this.title
      },
      set(value) {
        this.$emit('update:title', value)
      }
    }
  }
};
</script>

<style scoped>
</style>