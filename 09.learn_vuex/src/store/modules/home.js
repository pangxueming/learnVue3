const homeModule = {
  namespaced: true,

  state: () => ({
    homeCounter: 20
  }),

  getters: {
    doubleHomeCounter(state, getters,/* 根的state */ rootState, /* 根的getters */ rootGetters) {
      console.log(getters.otherGetters);
      return state.homeCounter * 2;
    },

    otherGetters() {
      return 10;
    }
  },

  mutations: {
    increment(state) {
      state.homeCounter++;
    }
  },

  actions: {
    incrementActions({ commit, dispatch, state, getters, rootState, rootGetters }) {
      commit('increment');

      // 提交commit到root, '触发mutation函数', ' payload', '是否是根'
      commit('increment', null, { root: true });

      // dispatch
      // dispatch('incrementActions', null, { root: true });
    }
  }
}

export { homeModule };
