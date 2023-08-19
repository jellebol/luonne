import { describe, it, expect } from 'vitest'

import { shallowMount } from '@vue/test-utils'
import ButtonIcon from './ButtonIcon.vue'

describe('ButtonIcon', () => {
  it('renders slot', () => {
    const wrapper = shallowMount(ButtonIcon, {
      slots: {
        default: 'Icon'
      }
    })

    expect(wrapper.html()).toContain('Icon')
  })
  it('renders text in html', () => {
    const wrapper = shallowMount(ButtonIcon, { props: { text: 'Click' } })
    expect(wrapper.text()).toContain('Click')
  })
})
