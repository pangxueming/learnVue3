import { createStore } from 'vuex';
import { userModule, homeModule } from './modules';

const store = createStore({
  state: () => ({
    rootCounter: 100
  }),

  mutations: {
    increment(state) {
      state.rootCounter++;
    }
  },
  modules: {
    userModule,
    homeModule
  }
});

export default store;
