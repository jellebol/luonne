<script setup lang="ts">
import ButtonText from '../buttons/ButtonText.vue'
import CardWrapper from '../card/CardWrapper.vue'
import ListItem from '../list/ListItem.vue'
import ListWrapper from '../list/ListWrapper.vue'
import HeadingText from '../typography/HeadingText.vue'
import { computed } from 'vue'
import { useActionStore } from '../../stores/actions'
import type { ActionLog } from '../../stores/actions'

const storeActions = useActionStore()

const allActions = computed(() => {
  return storeActions.getActions
})

const getActionText = computed(() => {
  return (action: ActionLog) =>
    'Moved post ' +
    action.postId +
    ' from index ' +
    action.oldIndex +
    ' to index ' +
    action.newIndex
})

function undoAction(action: ActionLog) {
  storeActions.undoAction(action)
}
</script>

<template>
  <CardWrapper>
    <HeadingText title="List of actions committed" />
    <template #main>
      <ListWrapper v-if="allActions.length > 0">
        <ListItem v-for="(action, index) in allActions" :key="index" :isFirst="index === 0">
          <p>{{ getActionText(action) }}</p>
          <template #action>
            <ButtonText @click-event="undoAction(action)" text="Time travel" />
          </template>
        </ListItem>
      </ListWrapper>
      <p v-else>A history log of moved post will show here</p>
    </template>
  </CardWrapper>
</template>
