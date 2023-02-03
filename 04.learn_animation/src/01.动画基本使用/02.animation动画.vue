<template>
  <div style="text-align: center;">
    <button @click="isShow = !isShow">显示/隐藏</button>
    <br />
    <transition name="fade">
      <h2 class="title" v-if="isShow">Hello World</h2>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
.title {
  display: inline-block;
  margin: 0 auto;
}

.fade-enter-active {
  animation: bounce 2s ease;
}

.fade-leave-active {
  animation: bounce 2s ease reverse;
}

@keyframes bounce {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(120%);
  }

  100% {
    transform: scale(100%);
  }
}
</style>