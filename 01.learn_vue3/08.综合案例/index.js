Vue.createApp({
  template: '#my-app',
  data() {
    return {
      books: [
        {
          id: 1,
          name: '《算法导论》',
          date: '2006-10',
          price: 80,
          count: 1
        },
        {
          id: 2,
          name: '《UNIX编程》',
          date: '2010-01',
          price: 90,
          count: 1
        },
        {
          id: 3,
          name: '《编程珠玑》',
          date: '2001-05',
          price: 39,
          count: 1
        },
        {
          id: 4,
          name: '《代码大全》',
          date: '2012-08',
          price: 89,
          count: 1
        }
      ]
    }
  },

  computed: {
    totalPrice() {
      let total = 0;
      [].length
      this.books.forEach(item => {
        total += item.price * item.count;
      })

      return total;
    }
  },

  methods: {
    decrement(index) {
      this.books[index].count--;
    },

    increment(index) {
      this.books[index].count++;
    },

    remove(index) {
      this.books.splice(index,1);
    }
  }
}).mount('#app');