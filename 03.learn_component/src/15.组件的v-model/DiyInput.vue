<template>
  <div>
    <!-- 1.手动修改 -->
    <!-- <button @click="btnClick">clickEvent</button>
    <h3>parent instace props message value is: {{modelValue}}</h3> -->

    <!-- 2.通过input，原生绑定value，input事件修改值 -->
    <!-- <input type="text" :value='modelValue' @input="btnClick"> -->

    <!-- 3.v-model绑定到props是不对的 -->
    <!-- <input type="text" v-model="modelValue" /> -->

    <!-- 4.v-model绑定到计算属性，该计算属性的getter绑定返回props，setter触发emit事件，通知父组件更改props  -->
    <input type="text" v-model="modelMessage" />
  </div>
</template>

<script>
export default {
  props: ["modelValue"],
  emits: ["update:modelValue"],
  computed: {
    modelMessage: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
    },
  },
  methods: {
    btnClick(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped>
</style>