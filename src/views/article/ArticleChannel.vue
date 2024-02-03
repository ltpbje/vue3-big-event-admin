<script setup>
import { Edit, Delete } from '@element-plus/icons-vue'
import { artGetChannelList } from '@/api/article.js'
import { ref } from 'vue'
const loading = ref(false)
const channelList = ref([])
const getChannelList = async () => {
  loading.value = true
  // 请求获取频道列表
  const res = await artGetChannelList()
  loading.value = false
  channelList.value = res.data.data
  console.log(res.data.data)
}
getChannelList()
const onEditChannel = ({ row, $index }) => {
  console.log(row, $index)
  // dialogVisible.value = true
}
const onDeleteChannel = ({ row, $index }) => {
  console.log(row, $index)
}
const dialogVisible = ref(false)
// onMounted(() => {
//   getChannelList()
// })
const onAddChannel = () => {
  dialogVisible.value = true
}
</script>

<template>
  <page-container title="文章分类">
    <template v-slot:extra>
      <el-button @click="onAddChannel" type="primary">添加分类</el-button>
    </template>
    <el-table v-loading="loading" :data="channelList" style="width: 100%">
      <el-table-column prop="date" label="序号" width="100" type="index" />
      <el-table-column prop="cate_name" label="分类名称" />
      <el-table-column prop="cate_alias" label="分类别名" />
      <el-table-column prop="address" label="操作" width="100">
        <template #default="{ row, $index }">
          <el-button
            type="primary"
            :icon="Edit"
            @click="onEditChannel({ row, $index })"
            circle
          ></el-button>
          <el-button
            type="danger"
            :icon="Delete"
            @click="onDeleteChannel({ row, $index })"
            circle
          ></el-button>
        </template>
      </el-table-column>

      <template #empty>
        <el-empty description="没有数据" />
      </template>
    </el-table>
    <el-dialog
      v-model="dialogVisible"
      title="添加分类"
      width="500"
      :before-close="handleClose"
    >
      <el-form :model="channelForm" label-width="120px">
        <el-form-item label="Activity name">
          <el-input v-model="form.name" />
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
  </page-container>
</template>
<style lang="scss" scoped>
.box-card {
  min-height: 100%;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
