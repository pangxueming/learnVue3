<template>
  <div>
    <div>
      <button @click="toggle">显示/隐藏</button>
    </div>

    <!-- <transition name="fade">
      <h2 class="title" v-if="isShow">Hello world1</h2>
    </transition> -->

    <transition enter-active-class="animate__animated animate__fadeInDown" leave-active-class="animate__animated animate__fadeInDown animation-revese">
      <h2 class="title" v-if="isShow">Hello world1</h2>
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

  methods: {
    toggle() {
      this.isShow = !this.isShow;
    },
  },
};
</script>

<style scoped>
.title {
  display: inline-block;
}
/* 
.fade-enter-active {
  animation: bounceInUp 1s ease;
}

.fade-leave-active {
  animation: bounceInUp 1s ease reverse;
} */

.animation-revese {
  animation-direction: reverse;
}
</style>