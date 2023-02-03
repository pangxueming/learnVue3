<template>
  <div>
    <div>
      <button @click="toggle">显示/隐藏</button>
    </div>

    <!-- :css='false', 跳过检测css -->
    <transition @enter="onEnter" @leave="onLeave" :css="false">
      <h2 class="title" v-if="isShow">Hello world1</h2>
    </transition>
  </div>
</template>

<script>
import gsap from "gsap";

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

    onEnter(el, done) {
      console.log("onEnter");
      gsap.from(el, {
        x: 100,
        scale: 0,
        onComplete: done,
      });
    },

    onLeave(el, done) {
      console.log("onLeave");
      gsap.to(el, {
        x: 100,
        scale: 0,
        onComplete: done,
      });
    },
  },
};
</script>

<style scoped>
.title {
  display: inline-block;
}
</style>