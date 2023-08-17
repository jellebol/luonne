<script setup lang="ts">
import CardWrapper from '../card/CardWrapper.vue'
import HeadingText from '../typography/HeadingText.vue'
</script>

<template>
  <CardWrapper>
    <HeadingText title="List of actions committed" />
    <template #main>
      <h1>List of actions here</h1>
    </template>
  </CardWrapper>
</template>
