<template>
  <div class="tab-control">
    <div
      v-for="(header, index) in headers"
      :key="header"
      @click="handleClickItem(index)"
      class="tab-control-item"
      :class="{active: currentIndex === index}"
    >
      <span>{{ header }}</span>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['titleClick'],
  props: {
    headers: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  data() {
    return {
      currentIndex: 0,
    };
  },

  methods: {
    handleClickItem (index) {
      this.currentIndex = index;
      this.$emit('titleClick', index);
    }
  }
};
</script>

<style scoped>
.tab-control {
  display: flex;
}

.tab-control-item {
  flex: 1;
  text-align: center;
}

.tab-control-item.active {
  color: red;
}

.tab-control-item.active span {
  border-bottom: 3px solid red;
  padding: 5px 10px;
}
</style>