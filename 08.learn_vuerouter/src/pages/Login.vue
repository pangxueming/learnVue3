<template>
  <div>
    <button @click="loginClick"> 登陆 </button>
    <button @click="logoutClick"> 登出 </button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function loginClick() {
  window.localStorage.setItem('token', '1111');
  router.push('/home');
}

function logoutClick() {
  window.localStorage.removeItem('token');
  router.push('/login');
}

</script>
