<template>
  <!-- <router-link to="/home" class="mr-20" v-slot="{ href, route, navigate, isActive, isExactActive }" custom> -->
  <router-link to="/home" class="mr-20">
    home
    <!-- 
      props: href跳转的连接
      props: route对象
      props: navigate导航函数
      props: isActive 是否当前处于活跃状态
      props: isExctActive 是否当前处于精确的活跃状态
     -->
    <!-- <button>{{ href }}</button> -->
    <!-- <button @click="navigate">哈哈哈哈</button>
    <br />
    <span :class="{ active: isActive || '' }">isActive: {{ isActive }}</span>
    <br />
    <span :class="{ active: isExactActive || '' }">isExactActive: {{ isExactActive }}</span>
    <br /> -->
    <!-- <p>{{ route }}</p> -->
  </router-link>
  <router-link to="/about" class="mr-20" v-slot="{ isExactActive }">
    about
    <!-- <span :class="{ active: isExactActive || '' }">isExactActive: {{ isExactActive }}</span>
    <br /> -->
  </router-link>
  <router-link to="/user/lisi/id/11">user</router-link>
  <br />

  <button @click="gotoHome">gotoHome</button>
  <button @click="gotoAbout">gotoAbout</button>
  <button @click="gotoUser">gotoUser</button>
  <br />

  <button @click="addRouter">添加category路由</button>
  <button @click="$router.push('/category')">navigate category</button>

  <br />
  <button @click="addSecondaryRoute">添加二级路由</button>

  <hr />

  <router-view v-slot="props">
    <!-- <transition name="anima"> -->
    <keep-alive>
      <component :is="props.Component"></component>
    </keep-alive>
    <!-- </transition> -->
  </router-view>
</template>

<script setup>
import { useRouter } from 'vue-router';
import NavBar from './components/NavBar.vue';
import Router from './router';

const router = useRouter();

function gotoHome() {
  router.push('/home');
}

function gotoAbout() {
  router.push({
    path: '/about',
    query: {
      name: 'zhangsan',
      age: 24
    }
  });
}

function gotoUser() {
  router.push('/user/zhaoliu/id/12');
}

// 添加一级路由
function addRouter() {
  Router.addRoute({ path: '/category', component: () => import('./pages/Category.vue') })
}

// 添加二级路由
function addSecondaryRoute() {
  Router.addRoute('home', {
    path: 'moment',
    component: () => import('./pages/HomeMoment.vue')
  })
}

// 删除某个路由
// Router.removeRoute('route-name')
</script>

<style>
.mr-20 {
  margin-right: 20px;
}

.active-class {
  color: red;
}

.active {
  color: skyblue
}

.anima-leave-to,
.anima-enter-from {
  opacity: 0;
}

.anima-leave-active,
.anima-enter-active {
  transition: opacity 1s ease;
}
</style>
