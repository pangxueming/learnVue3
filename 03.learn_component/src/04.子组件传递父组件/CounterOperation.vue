<template>
  <div>
    <button @click="decrement" class="mr-10">-1</button>
    <button @click="increment">+1</button>
    <div>
      <input type="text" v-model.number="addCounter" />
      <button @click="handleClickAddCounter">+{{ addCounter }}</button>
    </div>
  </div>
</template>

<script>
export default {
  // emits: ["handleClickBtn"], // 显式地声明触发的事件名称
  emits: {
    // 对象写法的目的是为了进行参数验证
    handleClickBtn(payload) {
      if (typeof payload !== 'number') return false;
      return true;
    },
  },

  data() {
    return {
      addCounter: 2,
    };
  },

  methods: {
    decrement() {
      this.$emit("handleClickBtn", -1);
    },

    increment() {
      this.$emit("handleClickBtn", 1);
    },

    handleClickAddCounter() {
      this.$emit("handleClickBtn", this.addCounter);
    },
  },
};
</script>

<style scoped>
</style>