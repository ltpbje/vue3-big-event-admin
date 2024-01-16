<script setup>
// import { useRouter, useRoute } from 'vue-router'
import { useRouter } from 'vue-router'
const Router = useRouter()
// const Route = useRoute()
const toList = () => {
  Router.push('/list')
}
</script>

<template>
  <div>我是APP</div>
  <button @click="$router.push('/home')">首页</button>
  <button @click="toList()">列表</button>
</template>

<style scoped></style>
