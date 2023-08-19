import { describe, it, expect } from 'vitest'

import { shallowMount } from '@vue/test-utils'
import ListWrapper from './ListWrapper.vue'

describe('ListWrapper', () => {
  it('renders slot', () => {
    const wrapper = shallowMount(ListWrapper, {
      slots: {
        default: 'Hello'
      }
    })

    expect(wrapper.html()).toContain('Hello')
  })
})
