<template>
  <div>
    <input type="text" v-model="keyword" />

    <transition-group
      tag="ul"
      name="fade"
      :css="false"
      @before-enter="onBeforeEnter"
      @enter="onEnter"
      @leave="onLeave"
    >
      <li v-for="(name, index) in showNames" :key="name" :data-index='index'>{{ name }}</li>
    </transition-group>
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  data() {
    return {
      names: [
        "lilei",
        "zhangsan",
        "wangwu",
        "hmmr",
        "jinks",
        "zhaoliu",
        "高启强gaoqiqiang",
      ],
      keyword: "",
    };
  },

  computed: {
    showNames() {
      return this.names.filter((item) => {
        return item.indexOf(this.keyword) > -1;
      });
    },
  },

  methods: {
    onBeforeEnter(el) {
      el.style.opacity = 0;
      el.style.height = 0;
    },

    onEnter(el, done) {
      gsap.to(el, {
        opacity: 1,
        height: '1.5rem',
        delay: el.dataset.index * 0.5,
        onComplete: done
      })
    },

    onLeave(el, done) {
       gsap.to(el, {
        opacity: 0,
        height: 0,
        onComplete: done
      })
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>