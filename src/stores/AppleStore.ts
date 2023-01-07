import { defineStore } from "pinia"
import { ref } from "vue"

export const useCounterStore = defineStore('counter', () => {
    const count = ref(2)
    const name = ref('Eduardo')
   
  
    return { count, name }
  })