import { defineStore } from 'pinia'
import axios from 'axios'
import { useActionStore } from './actions'

export interface PostResponse {
  id: number // only id is used atm
}

export const usePostStore = defineStore('post', {
  state: () => ({
    posts: [] as PostResponse[]
  }),
  getters: {
    getFirstPosts: (state) => {
      // allow fetching desired amount of first posts, default to 5
      return (amount: number = 5) => state.posts.slice(0, amount)
    },
    getPostOrderById: (state) => {
      return state.posts.map((post) => post.id)
    }
  },
  actions: {
    async fetchPosts() {
      try {
        const data = await axios.get('https://jsonplaceholder.typicode.com/posts')
        this.posts = data.data
      } catch (error) {
        // TODO glorious error handling
        console.log(error)
      }
    },
    movePost(index: number, newIndex: number, postId: number) {
      const storeActions = useActionStore()
      // first set the action with current post order
      // so that we can restore that order later on
      storeActions.setNewAction(index, newIndex, postId)

      // then move the post to its new position
      const temp = this.posts[newIndex]
      this.posts[newIndex] = this.posts[index]
      this.posts[index] = temp
    },
    async restorePostOrderById(postOrderById: number[]) {
      try {
        this.posts = postOrderById.map((id) => ({ id }))
      } catch {
        // TODO glorious error handling
        console.log('Could not restore post order')
      }
    }
  }
})
