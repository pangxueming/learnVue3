export const demoMixin = {
  data() {
    return {
      message: 'Hello demoMixin'
    }
  },

  methods: {
    foo() {
      console.log('demo mixin foo');
    },
  },

  created() {
    console.log('执行了demo mixin created');
  }
}