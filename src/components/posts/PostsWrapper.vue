<script setup lang="ts">
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
  <HeadingText title="Sortable Post List" isInvertColour type="h1" />
  <div v-for="post in store.getFirstPosts()" :key="post.id">Post {{ post.id }}</div>
</template>
