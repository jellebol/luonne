import { describe, it, expect } from 'vitest'

import { shallowMount } from '@vue/test-utils'
import ListItem from './ListItem.vue'

describe('ListItem', () => {
  it('renders slot', () => {
    const wrapper = shallowMount(ListItem, {
      slots: {
        default: 'Hello'
      }
    })

    expect(wrapper.html()).toContain('Hello')
  })
})
