import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { mount } from '@vue/test-utils'
import ActionsWrapper from './ActionsWrapper.vue'
import { useActionStore } from '../../stores/actions'

describe('ActionWrapper', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('shows empty state when there are no actions', () => {
    const storeActions = useActionStore()
    expect(storeActions.actions.length).toBe(0)

    const wrapper = mount(ActionsWrapper)
    expect(wrapper.text()).toContain('A history log of moved post will show here')
  })

  it('shows list of existing actions', () => {
    const storeActions = useActionStore()
    storeActions.setNewAction(0, 1, 1)
    storeActions.setNewAction(1, 0, 2)

    const wrapper = mount(ActionsWrapper)
    expect(wrapper.text()).toContain('Moved post 1 from index 0 to index 1')
    expect(wrapper.text()).toContain('Moved post 2 from index 1 to index 0')
    expect(wrapper.findAll('button').length).toBe(2)
  })
})
