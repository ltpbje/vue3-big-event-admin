<script setup>
import { Edit, Delete } from '@element-plus/icons-vue'

import { artGetChannelList } from '@/api/article.js'
import { ref } from 'vue'
const channelList = ref([])
const getChannelList = async () => {
  const res = await artGetChannelList()
  channelList.value = res.data.data
  console.log(res.data.data)
}
getChannelList()

// onMounted(() => {
//   getChannelList()
// })
</script>

<template>
  <page-container title="文章分类">
    <template v-slot:extra>
      <el-button type="primary">添加分类</el-button>
    </template>
    <el-table :data="channelList" style="width: 100%">
      <el-table-column prop="date" label="序号" width="100" type="index" />
      <el-table-column prop="cate_name" label="分类名称" width="180" />
      <el-table-column prop="cate_alias" label="分类别名" width="180" />
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
    </el-table>
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
