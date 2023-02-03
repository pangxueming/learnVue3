<template>
  <div>
    <div>
      <button @click="addNumber">添加数字</button>
      <button @click="removeNumber">删除数字</button>
      <button @click="shuffleNumer">数字洗牌</button>
    </div>

    <transition-group name="fade" appear>
      <span class="span-item" v-for="item in numbers" :key="item">{{
        item
      }}</span>
    </transition-group>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  data() {
    return {
      numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      numCounter: 10,
    };
  },

  methods: {
    addNumber() {
      this.numbers.splice(this.randomIndex(), 0, this.numCounter++);
    },

    removeNumber() {
      this.numbers.splice(this.randomIndex(), 1);
    },

    shuffleNumer() {
      this.numbers = _.shuffle(this.numbers);
    },

    randomIndex() {
      return Math.floor(Math.random() * this.numbers.length);
    },
  },
};
</script>

<style scoped>
.span-item {
  margin-right: 10px;
  display: inline-block;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
}

.fade-leave-to,
.fade-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.fade-leave-active {
  position: absolute;
}

.fade-move {
  transition: transform 1s ease;
}
</style>