import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(100)
  const addCount = () => {
    count.value = count.value + 2
  }
  return { count, addCount }
})
