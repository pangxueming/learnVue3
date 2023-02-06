<template>
  <div>
    <h2>fullName is: {{ fullName }}</h2>

    <button @click="handleChangeLastName">修改lastname</button>
  </div>
</template>

<script>
import { computed, ref } from "vue";
export default {
  setup() {
    const firstName = ref("zhang");
    const lastName = ref("san");

    // 1.用法一： 传入一个getter函数
    // const fullName = computed(() => firstName.value + "-" + lastName.value);

    // 2.用法二： 传入一个对象，对象包含setter和getter
    const fullName = computed({
      get: () => firstName.value + "-" + lastName.value,
      set: (newVal) => {
        [firstName.value, lastName.value] = newVal.split("-");
      },
    });

    function handleChangeLastName() {
      // lastName.value = "sanfeng";
      fullName.value = 'li-si';
    }

    return {
      firstName,
      lastName,
      fullName,
      handleChangeLastName,
    };
  },
};
</script>

<style scoped>
</style>