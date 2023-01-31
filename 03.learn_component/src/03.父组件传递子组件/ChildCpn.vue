<template>
  <div>
    <!-- <h2 :class="$attrs.class">this is child component</h2> -->
    <h2 v-bind="$attrs">this is child component</h2>

    <h3 class="message">{{ messageInfo }}</h3>
    <h3>{{ content }}</h3>
    <h3>{{ info.name }}</h3>

    <button @click="handleChangeInfo">changeInfo</button>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  // props: ['message', 'content'], // 数组字符串方式
  props: {
    messageInfo: String,
    content: {
      type: Number,
      require: true,
      default: 12222,
    },
    propB: [String, Number],
    info: {
      type: Object,
      default() {
        return {
          name: "lisi",
          age: 23,
        };
      },
    },
  },

  methods: {
    handleChangeInfo() {
      this.$emit("changeInfo", this.info);
      console.log(this.info);
    },
  },
};
</script>

<style scoped>
.message {
  color: red;
}
</style>