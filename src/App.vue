<script setup>
// import { useRouter, useRoute } from 'vue-router'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/modules/user'
const Router = useRouter()
// const Route = useRoute()
const toList = () => {
  Router.push('/list')
}
const userStore = useUserStore()
</script>

<template>
  <div>我是APP</div>
  <button @click="$router.push('/home')">首页</button>
  <button @click="toList()">列表</button>
  <el-button type="primary">Primary</el-button>
  <el-button type="success">Success</el-button>
  <!-- 彩蛋：默认 components 下的文件也会被自动注册~ -->
  <!-- <test-demo></test-demo> -->
  <br />
  {{ userStore.token }}
  <br />
  <el-button @click="userStore.setToken('Bearer sidfhheiwhuvyweqrjh')">
    修改token</el-button
  >
  <el-button @click="userStore.removeToken"> 清空token</el-button>
</template>

<style scoped></style>
