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

const getActionText = computed(() => {
  return (action: ActionLog) =>
    'Moved post ' +
    action.postId +
    ' from index ' +
    action.oldIndex +
    ' to index ' +
    action.newIndex
})
</script>

<template>
  <CardWrapper>
    <HeadingText title="List of actions committed" />
    <template #main>
      <ListWrapper v-if="storeActions.getActions.length > 0">
        <ListItem
          v-for="(action, index) in storeActions.getActions"
          :key="index"
          :isFirst="index === 0"
          class="animate-fade animate-delay-75 animate-duration-150"
        >
          <p>{{ getActionText(action) }}</p>
          <template #action>
            <ButtonText
              @click-event="storeActions.undoAction(action)"
              text="Time travel"
              titleText="Revert post order to before this action was taken"
            />
          </template>
        </ListItem>
      </ListWrapper>
      <p v-else>A history log of moved post will show here</p>
    </template>
  </CardWrapper>
</template>
