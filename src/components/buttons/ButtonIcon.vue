<script setup lang="ts">
interface Props {
  text: string // for accessibility
}

const props = defineProps<Props>()
</script>

<template>
  <button @click="$emit('clickEvent')" type="button"
    class="rounded hover:bg-purple focus:outline outline-purple-light outline-2 text-purple-dark hover:text-white transition-all">
    <slot></slot>
    <span class="sr-only">{{ props.text }}</span>
  </button>
</template>
