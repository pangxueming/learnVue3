<template>
  <div>message: <input type="text" v-model="message" />
  
  <h2>{{message}}</h2></div>
</template>
  
<script>
import { ref } from "vue";
import { useDebounceRef } from "./hook/useDebounceRef";

export default {
  setup() {
    const message = useDebounceRef("hello world");
    
    return {
      message,
    };
  },
};
</script>
  
  <style scoped>
</style>