<script setup>
import { ref } from 'vue'
const dialogVisible = ref(false)
const open = (row) => {
  dialogVisible.value = true
  console.log(row)
}
defineExpose({
  open
})
</script>

<template>
  <el-dialog
    v-model="dialogVisible"
    title="添加分类"
    width="500"
    :before-close="handleClose"
  >
    <el-form :model="channelForm" label-width="120px">
      <el-form-item label="Activity name">
        <el-input />
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogVisible = false">
          确认
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>
