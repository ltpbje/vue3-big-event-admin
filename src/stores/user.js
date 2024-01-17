import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('big-user', () => {
  const token = ref('') //定义token
  const setToken = (t) => {
    token.value = t
  } // 设置 token
  const removeToken = () => {
    token.value = ''
  } //清空token
  return { token, setToken, removeToken }
})
