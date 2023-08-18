<script setup lang="ts">
import CardWrapper from '../card/CardWrapper.vue'
import ListItem from '../list/ListItem.vue'
import ListWrapper from '../list/ListWrapper.vue'
import HeadingText from '../typography/HeadingText.vue'
import { computed } from 'vue';
import { useActionStore } from '../../stores/actions'
import type { ActionLog } from '../../stores/actions'

const storeActions = useActionStore()

const allActions = computed(() => {
  return storeActions.getActions
})

const getActionText = computed(() => {
  return (action: ActionLog) => 'Moved post ' + action.postId + ' from index ' + action.oldIndex + ' to index ' + action.newIndex
})
</script>

<template>
  <CardWrapper>
    <HeadingText title="List of actions committed" />
    <template #main>
      <ListWrapper>
        <ListItem v-for="(action, index) in allActions" :key="index" :isFirst="index === 0">
          <p>{{ getActionText(action) }}</p>
          <template #action>
            <button>undo</button>
          </template>
        </ListItem>
      </ListWrapper>
    </template>
  </CardWrapper>
</template>
