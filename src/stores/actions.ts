import { defineStore } from 'pinia'

export interface ActionLog {
  postId: number
  newIndex: number
  oldIndex: number
}

export const useActionStore = defineStore('action', {
  state: () => ({
    actions: [] as ActionLog[]
  }),
  getters: {
    getActions: (state) => {
      return state.actions
    }
  },
  actions: {
    setNewAction(oldIndex: number, newIndex: number, postId: number) {
      console.log(oldIndex, newIndex, postId)
      this.actions.push({ postId, newIndex, oldIndex })
    },
    undoAction() {
      console.log(this.actions)
    }
  }
})
