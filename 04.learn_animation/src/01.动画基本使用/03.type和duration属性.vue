<template>
  <div style="text-align: center;">
    <button @click="isShow = !isShow">显示/隐藏</button>
    <br />
    <transition name="fade" type="transition" :duration="{leave: 800, enter: 1000}">
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
  animation: bounce 1s ease;
}

.fade-leave-active {
  animation: bounce 1s ease reverse;
}

.fade-enter-from, 
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
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