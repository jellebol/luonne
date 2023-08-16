import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HeadingText from './HeadingText.vue'

describe('HeadingText', () => {
  it('renders title', () => {
    const wrapper = mount(HeadingText, { props: { title: 'Hello' } })
    expect(wrapper.text()).toContain('Hello')
  })
  it('renders default type', () => {
    const wrapper = mount(HeadingText, { props: { title: 'Hello' } })
    expect(wrapper.findAll('h2').length).toEqual(1)
  })
  it('renders type', () => {
    const wrapper = mount(HeadingText, { props: { title: 'Hello', type: 'h3' } })
    expect(wrapper.findAll('h2').length).toEqual(0)
    expect(wrapper.findAll('h3').length).toEqual(1)
  })
})
