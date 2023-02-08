<template>
  <div>
    <h2>hello world</h2>

    <h2>{{ message }}</h2>

    <button @click="emitEvent">发射事件</button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  message: {
    type: String,
    require: true,
    default: ''
  }
})

const emit = defineEmits(['increment'])

function emitEvent() {
  emit('increment', 'increment value');
}
</script>