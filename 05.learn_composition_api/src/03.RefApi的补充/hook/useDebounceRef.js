import { customRef } from 'vue';
import _ from 'lodash';

// 自定义ref debounce
export function useDebounceRef(val) {
  let timer = null;
  return customRef(function (track, trigger) {
    return {
      get() {
        track();
        return val;
      },

      set(newVal) {
        if (timer) clearTimeout(timer);

        timer = setTimeout(() => {
          val = newVal;
          trigger();
        }, 200);
      }
    }
  })
}
