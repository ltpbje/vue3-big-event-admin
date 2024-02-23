<template>
  <!-- 测试 -->
  <el-form
    ref="form"
    :model="form"
    :rules="rules"
    label-width="100px"
    class="demo-ruleForm"
  >
    <el-form-item label="登录名称">
      <el-input v-model="form.loginName" disabled></el-input>
    </el-form-item>
    <el-form-item label="用户昵称" prop="nickname">
      <el-input v-model="form.nickname"></el-input>
    </el-form-item>
    <el-form-item label="用户邮箱" prop="email">
      <el-input v-model="form.email"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm">提交修改</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        loginName: '默认登录名称',
        nickname: '',
        email: ''
      },
      rules: {
        nickname: [
          { required: true, message: '请输入用户昵称', trigger: 'blur' },
          { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入用户邮箱', trigger: 'blur' },
          { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          // 表单验证通过，可以提交数据
          console.log('表单验证通过，提交数据:', this.form)
        } else {
          // 表单验证不通过，给出提示
          this.$message.error('表单验证失败，请检查输入')
          return false
        }
      })
    }
  }
}
</script>

<style scoped>
.demo-ruleForm {
  max-width: 400px;
  margin: 0 auto;
  padding-top: 50px;
}
</style>
