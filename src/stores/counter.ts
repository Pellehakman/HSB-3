import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const userStore = defineStore('counter', () => {
  const name = ref('')
  
  

  return { name }
})
