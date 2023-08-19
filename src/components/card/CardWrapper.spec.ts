import { describe, it, expect } from 'vitest'

import { shallowMount } from '@vue/test-utils'
import CardWrapper from './CardWrapper.vue'

describe('CardWrapper', () => {
  it('renders slots', () => {
    const wrapper = shallowMount(CardWrapper, {
      slots: {
        default: '<div>Header</div>',
        main: '<div>Main Content</div>'
      }
    })

    expect(wrapper.html()).toContain('<div>Header</div>')
    expect(wrapper.html()).toContain('<div>Main Content</div>')
  })
  it('does not render <main> if slot is not filled', () => {
    const wrapper = shallowMount(CardWrapper, {
      slots: {
        default: '<div>Header</div>'
      }
    })
    expect(wrapper.findAll('main').length).toEqual(0)
  })
})
