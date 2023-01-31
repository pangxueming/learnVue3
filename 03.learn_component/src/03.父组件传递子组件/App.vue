<template>
  <div>
    <h2>this is parent component</h2>

    <!-- <child-cpn :message="message" content='content detail' /> -->
    <child-cpn
      class="inherit-class"
      id="child-id"
      :message-info="message"
      :content="1234"
      propB="ccc"
      :info="info"
      @changeInfo="handleChangeInfo"
    />
    <!-- <child-cpn class="inherit-class" :message-info="message" :content="1234" propB="ccc" @changeInfo="handleChangeInfo" />
    <child-cpn class="inherit-class" :message-info="message" :content="1234" propB="ccc" @changeInfo="handleChangeInfo" /> -->

    <multi-root-element-cpn class="multi-class" />
  </div>
</template>

<script>
import ChildCpn from "./ChildCpn.vue";
import MultiRootElementCpn from "./MultiRootElement.vue";

export default {
  components: {
    ChildCpn,
    MultiRootElementCpn,
  },
  data() {
    return {
      message:
        "this is parent pass to child component message, it will change in third seconds",
      info: { name: "zhangsan", age: 20 },
    };
  },

  created() {
    setTimeout(() => {
      this.message = "this is changed message content";
    }, 3 * 1000);
  },

  methods: {
    handleChangeInfo(info) {
      info.name = "zhaoliu";
    },
  },
};
</script>

<style scoped>
</style>