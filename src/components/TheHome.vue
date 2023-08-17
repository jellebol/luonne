<script setup lang="ts">
import ActionsWrapper from './actions/ActionsWrapper.vue'
import PostsWrapper from './posts/PostsWrapper.vue'
</script>

<template>
  <div class="grid md:grid-cols-2">
    <PostsWrapper />
    <ActionsWrapper />
  </div>
</template>
