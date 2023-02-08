<script>
import { h } from 'vue';

export default {
  render() {
    return h('h2', null, [
      h('h2', null, 'Hello World'),
      this.$slots.default ? this.$slots.default({ name: 'h函数传props' }) : h('span', null, '我是span的默认hello world')
    ])
  }
}
</script>
