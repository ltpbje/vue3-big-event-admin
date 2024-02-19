<script setup>
import { ref } from 'vue'
const visibleDrawer = ref(false)
const open = (row) => {
  visibleDrawer.value = true
  console.log('渲染所需数据', row)
}
defineExpose({ open })
</script>

<template>
  <!-- 抽屉 -->
  <el-drawer
    v-model="visibleDrawer"
    title="I am the title"
    :direction="ltr"
    :before-close="handleClose"
    size="50%"
  >
    <span>Hi, there!</span>
  </el-drawer>
</template>
