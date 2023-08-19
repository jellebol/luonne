import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { usePostStore } from './posts'

describe('Post Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('gets first posts of array', () => {
    const storePosts = usePostStore()
    storePosts.posts = [{ id: 1 }, { id: 2 }, { id: 3 }]
    expect(storePosts.posts.length).toBe(3)

    const firstPosts = storePosts.getFirstPosts(2)
    expect(firstPosts.length).toBe(2)
  })

  it('returns an array of post ids', () => {
    const storePosts = usePostStore()
    storePosts.posts = [{ id: 1 }, { id: 2 }, { id: 3 }]

    const postIds = storePosts.getPostOrderById
    expect(postIds).toEqual([1, 2, 3])
  })

  it('moves a post', () => {
    const storePosts = usePostStore()
    storePosts.posts = [{ id: 1 }, { id: 2 }, { id: 3 }]
    storePosts.movePost(0, 1)

    expect(storePosts.posts).toEqual([{ id: 2 }, { id: 1 }, { id: 3 }])
  })

  it('restores post order by post id', () => {
    const storePosts = usePostStore()
    storePosts.posts = [{ id: 1 }, { id: 2 }, { id: 3 }]
    storePosts.restorePostOrderById([3, 2, 1])

    expect(storePosts.posts).toEqual([{ id: 3 }, { id: 2 }, { id: 1 }])
  })
})
