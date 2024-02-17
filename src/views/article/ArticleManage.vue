<script setup>
import { artGetChannelsService } from '@/api/article'
import ChannelSelect from './components/ChannelSelect.vue'
import { Edit, Delete } from '@element-plus/icons-vue'
import { ref } from 'vue'
import { formatTime } from '@/utils/format'
// 假数据
const articleList = ref([
  {
    id: 5961,
    title: '新的文章啊',
    pub_date: '2022-07-10 14:53:52.604',
    state: '已发布',
    cate_name: '体育'
  },
  {
    id: 5962,
    title: '新的文章啊',
    pub_date: '2022-07-10 14:54:30.904',
    state: null,
    cate_name: '体育'
  }
])
const total = ref(5)

const params = ref({
  pagenum: 1,
  pagesize: 2,
  cate_id: '',
  state: '已发布'
})
// 获取文章列表
const getChannelList = async () => {
  const res = await artGetChannelsService(params.value)
  console.log('获取文章列表', res)
  articleList.value = res.data.data
  total.value = res.data.total
}
getChannelList()
const cateId = ref(84945)
const onEdit = (row) => {
  console.log('编辑', row)
}
</script>
<template>
  <page-container title="添加文章">
    <el-form inline>
      <el-form-item style="width: 200px" label="文章分类：">
        <!--Vue2 =>v-model :value 和@input 的简写-->
        <!-- Vue3 => v-model:modelValue 和 @update:modelValue 的简写-->
        <channel-select v-model="cateId"></channel-select>
      </el-form-item>
      <el-form-item style="width: 200px" label="发布状态">
        <el-select>
          <el-option label="已发布" value="已发布"></el-option>
          <el-option label="草稿" value="草稿"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">搜索</el-button>
        <el-button>重置</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="articleList" style="width: 100%">
      <el-table-column :value="articleList" label="文章标题">
        <template #default="{ row }">
          <el-link type="primary" :underline="false">{{ row.title }}</el-link>
        </template>
      </el-table-column>
      <el-table-column label="分类" prop="cate_name"></el-table-column>
      <el-table-column label="发表时间" prop="pub_date">
        <template #default="{ row }">
          {{ formatTime(row.pub_date) }}
        </template>
      </el-table-column>
      <el-table-column label="状态" prop="state"></el-table-column>
      <!-- 利用作用域插槽row可以获取当前行的数据 => v-for遍历item- -->
      <el-table-column label="操作">
        <template #default="{ row }">
          <el-button
            type="success"
            @click="onEdit(row)"
            :icon="Edit"
            circle
          ></el-button>
          <el-button
            type="danger"
            @click="onDel(row)"
            :icon="Delete"
            circle
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      v-model:current-page="params.pagenum"
      v-model:page-size="params.pagesize"
      :page-sizes="[1, 5, 10, 100]"
      :disabled="disabled"
      :background="background"
      layout="jumper,total, sizes, prev, pager, next "
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </page-container>
</template>
