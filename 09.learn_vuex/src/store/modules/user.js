const userModule = {
  namespaced: true,

  state: () => ({
    userCounter: 10
  }),

  getters: {

  },

  mutations: {
    increment(state) {
      state.userCounter++;
    }
  },

  actions: {

  }
}

export { userModule };
