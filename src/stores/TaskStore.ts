import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [],
    loading: false
  }),
  getters: {
    displayValue: (state) => {
      return state
  }
    
  },
  actions: {
   
    async addTask(task:any) {
      this.tasks.push(task)

    }
    
  }
})