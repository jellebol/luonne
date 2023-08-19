import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { mount } from '@vue/test-utils'
import PostsWrapper from './PostsWrapper.vue'
import { usePostStore } from '../../stores/posts'

describe('PostsWrapper', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('shows list of existing posts', () => {
    const storePosts = usePostStore()
    storePosts.posts = [{ id: 1 }, { id: 2 }]

    const wrapper = mount(PostsWrapper)
    expect(wrapper.text()).toContain('Post 1')
    expect(wrapper.text()).toContain('Post 2')
  })

  it('shows the correct number of buttons for each post', () => {
    const storePosts = usePostStore()
    storePosts.posts = [{ id: 1 }, { id: 2 }, { id: 3 }]

    const wrapper = mount(PostsWrapper)
    // first posts has only one button to move post down
    expect(wrapper.findAll('button').length).toBe(4)
    expect(wrapper.findAll('#post-1 button').length).toBe(1)
    expect(wrapper.findAll('#post-1 button')[0].text()).toEqual('Move post 1 down')

    // second post has two buttons for moving up or down
    expect(wrapper.findAll('#post-2 button').length).toBe(2)
    expect(wrapper.findAll('#post-2 button')[0].text()).toEqual('Move post 2 up')
    expect(wrapper.findAll('#post-2 button')[1].text()).toEqual('Move post 2 down')

    // third and last post has only one button to move post up
    expect(wrapper.findAll('#post-3 button').length).toBe(1)
    expect(wrapper.findAll('#post-3 button')[0].text()).toEqual('Move post 3 up')
  })

  it('shows no buttons if there is only one post', () => {
    const storePosts = usePostStore()
    storePosts.posts = [{ id: 1 }]

    const wrapper = mount(PostsWrapper)
    expect(wrapper.text()).toContain('Post 1')
    expect(wrapper.findAll('button').length).toBe(0)
  })
})
