import { describe, it, expect } from 'vitest'

import { shallowMount } from '@vue/test-utils'
import ButtonText from './ButtonText.vue'

describe('ButtonText', () => {
  it('renders text', () => {
    const wrapper = shallowMount(ButtonText, { props: { text: 'Click' } })
    expect(wrapper.text()).toContain('Click')
  })
  it('renders title text in html', () => {
    const wrapper = shallowMount(ButtonText, { props: { text: 'Click', titleText: 'Information' } })
    expect(wrapper.html()).toContain('Information')
  })
})
