<template>
  <div style="text-align: center;">
    <button @click="isShow = !isShow">显示/隐藏</button>
    <br />
    <!-- mode: in-out/out-in -->
    <!-- appear: true, 进入，刷新之后有动画 -->
    <transition name="fade" mode='out-in' appear>
      <component :is='isShow ? "home": "about"'></component>
    </transition>
  </div>
</template>

<script>
import Home from './pages/Home.vue';
import About from './pages/About.vue';
export default {
  components: {
    Home,
    About
  },
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