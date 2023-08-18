import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'
import { usePostStore } from './posts'

export interface ActionLog {
  uuid: string
  postId: number
  newIndex: number
  oldIndex: number
  oldPostOrder: number[]
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
      const storePosts = usePostStore()
      const postOrderById = storePosts.getPostOrderById
      const newAction = { postId, newIndex, oldIndex, uuid: uuidv4(), oldPostOrder: postOrderById }
      this.actions.unshift(newAction)
    },
    undoAction(action: ActionLog) {
      const storePosts = usePostStore()
      storePosts
        .restorePostOrderById(action.oldPostOrder)
        // only remove actions if the restoring of order was successful
        .then(() => this.removeActionsToUuid(action.uuid))
    },
    removeActionsToUuid(uuid: string) {
      const actionToRemoveIndex = this.actions.findIndex((action) => action.uuid === uuid)
      this.actions.splice(0, actionToRemoveIndex + 1)
    }
  }
})
