<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  title: string
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p'
  isInvertColour?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  type: 'h2'
})

const fontSizeClass = computed<string>(() => {
  switch (props.type) {
    case 'h1':
      return 'text-2xl'
    case 'h2':
      return 'text-xl'
    case 'p':
      return 'text-md'
    default:
      return 'text-lg'
  }
})
</script>

<template>
  <component :is="props.type" :class="[{ 'text-white': props.isInvertColour }, fontSizeClass]">
    {{ props.title }}
  </component>
</template>
