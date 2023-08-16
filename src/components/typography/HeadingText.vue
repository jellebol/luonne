<script setup lang="ts">
interface Props {
  title: string
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
  isInvertColour?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  type: 'h2'
})
</script>

<template>
  <component :is="props.type" :class="{ 'text-white': props.isInvertColour }">
    {{ props.title }}
  </component>
</template>
