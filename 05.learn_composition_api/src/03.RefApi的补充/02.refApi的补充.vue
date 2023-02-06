<template>
  <div>
    <h2>info: {{ info }}</h2>

    <button @click="changeName">changeName</button>
    <button @click="changeNameObj">changeNameObj</button>
  </div>
</template>

<script>
import { ref, shallowRef, triggerRef } from "vue";

export default {
  setup() {
    const info = shallowRef({name: 'zhangsan'});

    function changeName() {
      info.value.name = 'lisi';

      triggerRef(info);
    }

    function changeNameObj() {
      info.value = {name: 'lisi'};
    }

    return {
      info,
      changeName,
      changeNameObj
    };
  },
};
</script>
