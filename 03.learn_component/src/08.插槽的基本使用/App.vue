<template>
  <div>
    <my-slot-cpn>
      <button>我是slot</button>
    </my-slot-cpn>

    <my-slot-cpn>
      我是普通文本
    </my-slot-cpn>

    <my-slot-cpn>
      <my-button />
    </my-slot-cpn>

    <my-slot-cpn></my-slot-cpn>

    <my-slot-cpn>
      <h2>哈哈哈哈</h2>
      <my-button />
      <strong>我是strong</strong>
    </my-slot-cpn>
  </div>
</template>

<script>
import MySlotCpn from './MySlotCpn.vue';
import MyButton from './MyButton.vue';

export default {
  components: {
    MySlotCpn,
    MyButton
  }
};
</script>

<style scoped>
</style>