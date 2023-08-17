<script setup lang="ts">
import CardWrapper from '../card/CardWrapper.vue'
import HeadingText from '../typography/HeadingText.vue'
import { onMounted } from 'vue'
import { usePostStore } from '../../stores/posts'

const store = usePostStore()

onMounted(() => {
  // fetch all posts when component is mounted
  store.fetchPosts()
})
</script>

<template>
  <div class="mb-7">
    <HeadingText title="Sortable Post List" isInvertColour type="h1" />
  </div>

  <div class="flex flex-col space-y-5">
    <CardWrapper v-for="post in store.getFirstPosts()" :key="post.id">
      <HeadingText :title="'Post ' + post.id" />
    </CardWrapper>
  </div>
</template>
