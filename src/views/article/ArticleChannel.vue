<script setup>
import PageContainer from './components/PageContainer.vue'
</script>

<template>
  <PageContainer title="文章分类">
    <template v-slot:extra>
      <el-button type="primary">添加分类</el-button>
    </template>
  </PageContainer>
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
