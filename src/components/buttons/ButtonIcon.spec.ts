import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import ButtonIcon from './ButtonIcon.vue'

describe('ButtonIcon', () => {
  it('renders slot', () => {
    const wrapper = mount(ButtonIcon, {
      slots: {
        default: 'Icon'
      }
    })

    expect(wrapper.html()).toContain('Icon')
  })
  it('renders text in html', () => {
    const wrapper = mount(ButtonIcon, { props: { text: 'Click' } })
    expect(wrapper.text()).toContain('Click')
  })
})
