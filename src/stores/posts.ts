import { defineStore } from 'pinia'
import axios from 'axios'

interface PostResponse {
  id: number
}

export const usePostStore = defineStore('post', {
  state: () => ({
    posts: [] as PostResponse[]
  }),
  getters: {
    getFirstPosts: (state) => {
      // allow fetching desired amount of first posts, default to 5
      return (amount: number = 5) => state.posts.slice(0, amount)
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
    }
  }
})
