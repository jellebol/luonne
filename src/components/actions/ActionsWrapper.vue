<script setup lang="ts">
import CardWrapper from '../card/CardWrapper.vue'
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
      <CardWrapper v-for="(action, index) in allActions" :key="index">
        <HeadingText :title="getActionText(action)" type="p" />
      </CardWrapper>
    </template>
  </CardWrapper>
</template>
