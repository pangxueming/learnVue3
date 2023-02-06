<template>
  <div>
    <h2>Home page</h2>
    <h2>{{ message }}</h2>
    <slot></slot>

    <button @click="btnClick">btnClick</button>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true,
    },
  },
  /**
   * @param props 父组件传递过来的属性
   * @param context {attrs: obj, slots: obj, emit: fn}
   */
  setup(props, {attrs, slots, emit}) {
    // const { message } = props; // props不能解构，解构会失去响应式
    console.log(attrs, slots, emit);

    function btnClick() {
      emit('btnClick', 'composition context emit')
    }

    return {
      btnClick
    }
  },
};
</script>

<style scoped>
</style>