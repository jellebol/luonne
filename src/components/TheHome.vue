<script setup lang="ts">
import ActionsWrapper from './actions/ActionsWrapper.vue'
import PostsWrapper from './posts/PostsWrapper.vue'
</script>

<template>
  <div class="md:flex gap-10 place-content-between">
    <div class="flex-1 md:max-w-[30rem]">
      <PostsWrapper />
    </div>
    <div class="flex-1 md:max-w-[30rem] mt-8 md:mt-0">
      <ActionsWrapper />
    </div>
  </div>
</template>
