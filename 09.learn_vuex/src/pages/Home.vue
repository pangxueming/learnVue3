<template>
  <div>
    <h2>homeCounter: {{ homeCounter }}</h2>
    <h2>doubleHomeCounter: {{ doubleHomeCounter }}</h2>
    <hr />

    <button @click="increment">home+1</button>
    <button @click="incrementActions">home actions+1</button>
  </div>
</template>

<script>
import {
  useState,
  useGetters,
  useMutation,
  useActions
} from '../hook';

export default {
  // computed: {
  //   ...mapState(['homeCounter']),
  //   ...mapGetters(['doubleHomeCounter'])
  // },
  // methods: {
  //   ...mapMutations(['increment']),
  //   ...mapActions(['incrementActions'])
  // }

  setup() {
    const state = useState('homeModule', ['homeCounter']);
    const getters = useGetters('homeModule', ['doubleHomeCounter']);

    const mutations = useMutation('homeModule', ['increment']);
    const actions = useActions('homeModule', ['incrementActions']);

    return {
      ...state,
      ...getters,
      ...mutations,
      ...actions
    }
  }
}
</script>
