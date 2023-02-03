<template>
  <div>
    <!-- <input type="text" v-model="message" /> -->
    <!-- <input
      type="text"
      :value="message"
      @input="message = $event.target.value"
    />
    <h2>{{ message }}</h2> -->

    <!-- 组件上使用v-model -->
    <diy-input v-model="message"></diy-input>
    <hr />
    <!-- <diy-input :modelValue="message" :update:model-value="($event) => (message = $event)"></diy-input> -->

    <!-- 多个props传递 -->
    <diy-input-2 v-model:message="message" v-model:title="title"></diy-input-2>
    
    <hr />
    <h2>{{ message }}</h2>
    <h2>{{ title }}</h2>
  </div>
</template>

<script>
import DiyInput from "./DiyInput.vue";
import DiyInput2 from "./DiyInput2.vue";

export default {
  components: {
    DiyInput,
    DiyInput2,
  },
  data() {
    return {
      message: "hello world",
      title: "我是title",
    };
  },
};
</script>

<style scoped>
</style>