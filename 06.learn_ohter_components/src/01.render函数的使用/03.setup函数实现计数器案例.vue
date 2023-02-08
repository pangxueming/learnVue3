<script>
import { h, ref } from 'vue';

export default {
  setup() {
    const counter = ref(1);

    return () => {
      return h('h2', { class: 'app', }, [
        h('h2', null, `当前计数： ${counter.value}`),
        h('button', {
          onclick: () => {
            counter.value++;
          }
        }, '+1'),
        h('button', {
          onclick: () => {
            counter.value--;
          }
        }, '-1')
      ])
    }
  }
}
</script>
