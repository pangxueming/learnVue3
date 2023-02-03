<template>
  <div>
    <div>
      <button @click="toggle">显示/隐藏</button>
    </div>

    <transition
      @before-enter="onBeforeEnter"
      @enter="onEnter"
      @after-enter="onAfterEnter"
      @before-leave="onBeforeLeave"
      @leave="onLeave"
      @after-leave="onAfterLeave"
      @leave-cancelled="onLeaveCancelled"
    >
      <h2 class="title" v-if="isShow">Hello world1</h2>
    </transition>
  </div>
</template>

<script>
import gsap from 'gsap';

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

    onBeforeEnter() {
      console.log('onBeforeEnter');
    },

    onEnter(el, done) {
      console.log('onEnter');
      gsap.from(el, {
        x: 100,
        onComplete() {
          done();
        }
      })
    },

    onAfterEnter() {
      console.log('onAfterEnter');
    },

    onBeforeLeave() {
      console.log('onBeforeLeave');
    },

    onLeave() {
      console.log('onLeave');
    },

    onAfterLeave() {
      console.log('onAfterLeave');
    },

    onLeaveCancelled() {
      console.log('onAfterLeave');
    }
  },
};
</script>

<style scoped>
.title {
  display: inline-block;
}
</style>