<script>
export default {
  data() {
    return {
      title: 'hello world cpn'
    }
  },
  render() {
    return (
      <div>
        <h2>Hello world</h2>
        {this.$slots.default ? this.$slots.default({title: this.title}) : (<span>哈哈哈</span>)}
      </div>
    );
  }
}
</script>
