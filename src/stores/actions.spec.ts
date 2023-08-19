import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useActionStore } from './actions'

describe('Action Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('sets new action to state', () => {
    const storeActions = useActionStore()
    expect(storeActions.actions.length).toBe(0)

    storeActions.setNewAction(0, 1, 2)
    expect(storeActions.actions.length).toBe(1)
    expect(storeActions.actions[0].oldIndex).toBe(0)
    expect(storeActions.actions[0].newIndex).toBe(1)
    expect(storeActions.actions[0].postId).toBe(2)
  })

  it('removes actions to action with certain uuid', () => {
    const storeActions = useActionStore()
    expect(storeActions.actions.length).toBe(0)

    storeActions.setNewAction(0, 1, 1)
    storeActions.setNewAction(0, 1, 2)
    storeActions.setNewAction(0, 1, 3)

    // remove actions until the second action
    const removeToUuid = storeActions.actions[1].uuid
    storeActions.removeActionsToUuid(removeToUuid)
    expect(storeActions.actions.length).toBe(1)

    // only first created action should remain
    expect(storeActions.actions[0].postId).toBe(1)
  })
})
