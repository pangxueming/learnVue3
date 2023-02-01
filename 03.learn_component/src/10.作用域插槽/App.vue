<template>
  <div>
    <!-- 独占默认插槽缩写 -->
    <show-names :names="names" v-slot="{ item, index }">
      <button>{{ item }} - {{ index }}</button>
    </show-names>

    <!-- 注意：如果还有其他的具名插槽，那么磨人插槽也必须使用template来包裹 -->
    <show-names :names="names">
      <template v-slot="{ item, index }">
        <button>{{ item }} - {{ index }}</button>
      </template>

      <template v-slot:slotName>
        <i>slotName插槽里面的内容</i>
      </template>
    </show-names>
  </div>
</template>

<script>
import ChildCpn from "./ChildCpn.vue";
import ShowNames from "./ShowNames.vue";

export default {
  components: {
    ChildCpn,
    ShowNames,
  },

  data() {
    return {
      names: ["zhangsan", "lisi", "wangwu", "zhaoliu"],
    };
  },
};
</script>
