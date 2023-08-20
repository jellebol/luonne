<script setup lang="ts">
interface Props {
  text: string
}

const props = defineProps<Props>()
</script>

<template>
  <button
    @click="$emit('clickEvent')"
    type="button"
    class="py-2 px-4 rounded bg-green hover:bg-white border-2 border-green focus:outline outline-purple-light outline-2 font-medium transition-all"
  >
    {{ props.text }}
  </button>
</template>
