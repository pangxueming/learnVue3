import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    // magic comments 魔法注释: 可以自定义分包名
    component: () => import(/* webpackChunkName: 'home-chunk' */'../pages/Home.vue'),
    meta: {
      queryInfo: 'router meta'
    },
    children: [
      {
        path: '',
        name: 'redirect-home',
        redirect: '/home/message'
      },
      {
        path: 'message',
        name: 'message',
        component: () => import('../pages/HomeMessage.vue')
      },
      {
        path: 'production',
        name: 'production',
        component: () => import('../pages/HomeProduction.vue')
      }
    ]
  },
  {
    path: '/about',
    component: () => import(/* webpackChunkName: 'about-chunk' */'../pages/About.vue')
  },
  {
    path: '/user/:username/id/:id',
    component: () => import(/* webpackChunkName: 'user-chunk' */'../pages/User.vue')
  },
  {
    // 用户打开不存在页面
    path: '/:patchMatch(.*)*',
    component: () => import(/* webpackChunkName: 'not-found-chunk' */'../pages/NotFound.vue')
  },
  {
    path: '/login',
    component: () => import('../pages/Login.vue')
  }
];

const router = createRouter({
  routes,
  history: createWebHistory()
})

// beforeEach 前置路由导航守卫
// to： Route对象，即将跳转到的Route对象
// from： Route对象，从哪一个路由对象导航过来的
/**
 * 返回值问题：
 *    1.false：不进行导航；
 *    2.undefined或者不写，进行默认导航
 *    3.字符串（‘路径’），跳转到路径
 *    4.对象： 类似于 router.push({path: '/login', query: {}})的{path: '/login', query: {}}
 */
router.beforeEach((to, from) => {
  // if (to.path.indexOf('/home') > -1) {
  //   return '/login'
  // }

  if (to.path !== '/login') {
    const token = window.localStorage.getItem('token');
    if (!token) {
      return '/login';
    }
  }
})

export default router;
