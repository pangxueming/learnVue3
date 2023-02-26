import { createStore } from 'vuex';
import { INCREMENT_N } from './mutation-types';
import axios from 'axios';

const store = createStore({
  state: () => ({
    counter: 0,
    name: 'zhangsan',
    age: 24,
    books: [
      { name: '深入vuejs', price: 120, count: 4 },
      { name: '深入webpack', price: 20, count: 2 },
      { name: '深入react', price: 50, count: 7 },
      { name: '深入node', price: 130, count: 10 },
    ],
    bannerLists: []
  }),

  mutations: {
    INCREMENT(state) {
      state.counter++;
    },
    DECREMENT(state) {
      state.counter--;
    },
    SELL_BOOK(state) {
      state.books[1].count--;
    },
    [INCREMENT_N](state, payload) {
      state.counter += payload;
    },
    addBannerData(state, payload) {
      state.bannerLists = payload;
    }
  },

  getters: {
    totalPrice(state) {
      // let total = 0;
      // state.books.forEach(item => {
      //   total += item.count * item.price;
      // })

      // return total;

      return state.books.reduce((preVal, current) => {
        return preVal += current.count * current.price;
      }, 0)
    },

    discountPrice(state, getters) {
      return getters.totalPrice * .8;
    },

    totalPriceCountGreaterN(state) {
      return function (n) {
        return state.books.reduce((preVal, current) => {
          if (current.count > n) {
            return preVal += current.count * current.price;
          } else {
            return preVal;
          }
        }, 0)
      }
    }
  },

  actions: {
    async incrementAction(context, payload) {
      setTimeout(() => {
        // 支持异步网络请求
        context.commit('INCREMENT');
      }, 1000);

      await context.dispatch('getHomeMultidata');
    },

    decrementAction({ commit }, payload) {
      commit('DECREMENT');
    },

    getHomeMultidata(context) {
      return new Promise((resolve, reject) => {
        axios.get('http://123.207.32.32:8000/home/multidata').then(res => {
          const banners = res.data.data.banner.list;
          context.commit('addBannerData', banners);
          resolve('success');
        }).catch(err => {
          reject(err);
        })
      })
    }
  }
});

export default store;
