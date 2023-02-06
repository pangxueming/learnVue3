<template>
  <div>
    <home :message="'哈哈哈哈哈哈哈'" id="home-cpn" class="home-class-style">
      <template #default>
        <h2>hhhhhhhhhaha</h2>
      </template>
    </home>
  </div>
</template>

<script>
import { ref, isProxy, reactive, readonly, isReadonly } from 'vue';
import Home from "./Home.vue";

export default {
  components: {
    Home,
  },

  setup() {
    const counter = ref(0);
    const info = reactive({
      name: 'zhangsan',
      age: 30
    })

    const counterReadonly = readonly(ref(0));

    console.log(isProxy(counter));
    console.log(isProxy(info));
    console.log(isProxy(counterReadonly));
    console.log(isReadonly(counterReadonly));

    /**
     * 判断reactive的api
     *  1.isProxy
     *    检查对象是否由reactive或readonly创建的proxy
     *  2.isReactive
     *    检查对象是否由reactive创建的响应式对象
     *    如果该代理是readonly创建的，但包裹了由reactive创建的另一个代理，它也会返回true
     *  3.isReadonly
     *    检查对象是否是由readonly创建的只读代理
     *  4.toRaw
     *    返回reactive或readonly代理的原始对象（不建议保留对原始对象的劫持的持久引用。请谨慎使用）
     *  5.shallowReactive
     *    创建一个响应式代理，它跟踪其自身property的响应性，但不执行嵌套对象的深层响应式转换（深层还是原生对象）。
     *  6.shallowReadonly
     *    创建一个proxy，使其自身的property为只读，但不执行嵌套对象的深度只读转换（深层还是可读，可写的）。
     */
  }
};
</script>

<style scoped>
</style>