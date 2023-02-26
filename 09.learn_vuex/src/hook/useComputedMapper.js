import { computed } from 'vue';
import { useStore } from 'vuex';

export function useComputedMapper(mapper, mapFn) {
  const storeStatus = {};
  const store = useStore();
  // storeStateFns 是一个函数对象{fn1: function, fn2: function}
  // function中需要用到this.$store，所以需要用到绑定this到store bind({$store: store})
  const storeFns = mapFn(mapper);

  Object.keys(storeFns).forEach(item => {
    // 绑定this到store
    const fn = storeFns[item].bind({ $store: store });
    storeStatus[item] = computed(fn);
  })

  return storeStatus;
}
