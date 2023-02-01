<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
    <div class="right">
      <slot :name="name"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String
  }
};
</script>

<style scoped>
.nav-bar {
  display: flex;
  height: 44px;
}

.left,
.right {
  flex: 1;
  background-color: red;
  text-align: center;
}

.center {
  flex: 2;
  background-color: blue;
}
</style>