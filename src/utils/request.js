import axios from 'axios'
import { useUserStore } from '@/stores'
import { ElMessage } from 'element-plus'
import router from '@/router'

const baseURL = 'https://big-event-vue-api-t.itheima.net'

const instance = axios.create({
  // TODO 1. 基础地址，超时时间
  baseURL,
  timeout: 10000
})

instance.interceptors.request.use(
  (config) => {
    const useStore = useUserStore()
    // TODO 2. 携带token
    if (useStore.token) {
      config.headers.Authorization = useStore.token
    }
    return config
  },
  (err) => Promise.reject(err)
)

instance.interceptors.response.use(
  (res) => {
    // TODO 4. 摘取核心响应数据
    if (res.data.code === 0) {
      return res
    }
    // TODO 3. 处理业务失败 抛出错误
    ElMessage(res.data.message || '服务异常')
    return Promise.reject(res.data)
  },
  (err) => {
    // TODO 5. 处理401错误 抛出错误
    // 错误的特殊情况=>401权限不足或token过期=>拦截到登录
    if (err.response?.status === 401) {
      router.push('/login')
    }

    // 错误的默认情况=>只要给提示
    ElMessage(err.response.data.message || '请求失败')
    return Promise.reject(err)
  }
)

export default instance
export { baseURL }
